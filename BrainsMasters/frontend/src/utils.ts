export async function apiCall<REQUEST, RESPONSE>(
    controller: string,
    methodName: string,
    request: REQUEST,
    history: null,
    from: null,
    navigateToLoginIfFail: boolean
): Promise<RESPONSE> {
    try {
        let authorization = "";
        if (controller.toLowerCase() !== "login") {
            authorization = "Basic " + token;
        }

        let url: string = apiUrl(controller, methodName);

        //console.log(JSON.stringify(request))

        let response1 = await fetch(url, {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization
            }
        });

        //console.log(JSON.stringify(response1))

        if (response1.status === 410) {
            /*
            if (navigateToLoginIfFail && g_history) {
               //g_history.push("/", { from: g_location });

                let anyHack: any = {};
                return anyHack;
            }

            if (!navigateToLoginIfFail || !g_history) throw "Access Denied";

            g_history.push("/", { from: g_location });

            let anyHack: any = {};

            return anyHack;
            */
            let anyHack: any = {};
            return anyHack;
        }

        //if empty = server not responding then 
        //page brewer disconnected

        let jsonified = await response1.json();
        return jsonified as RESPONSE;
    } catch (err) {
        navigate("/error")
        let anyHack: any = {};

        return anyHack;
    }
}

export function setToken(in_token: string): void {
    token = in_token;
}
export function getToken(): string {
    return token;
}
let token = "";

export function apiUrl(controller: string, methodName: string) {
    if (window.location.origin.indexOf("localhost") > 0) {
        return `http://localhost:3000/api` ///${controller}/${methodName};
    } else {
        if (window.location.origin.indexOf("mngtool.cafection.com") >= 0) {
            return `https://mngtool.cafection.com/mng3/api/${controller}/${methodName}`;
        } else {
            return `http://104.145.11.36/mngtool3/api/${controller}/${methodName}`;
        }
    }
}

export function navigate(url: string) {
    if (!true) {
        let prefix = url.startsWith("/") ? ".." : "../";
        url = prefix + url;
    }

    //g_history.push(url);
}