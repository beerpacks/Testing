export function apiUrl(controller: string, methodName: string) {
    const origin = "http://10.0.0.24:8080";
    // Rewrite the new path
    return `${origin}/api/${controller}/${methodName}`;
}

export async function apiCall<REQUEST, RESPONSE>(
    controller: string,
    methodName: string,
    request: REQUEST,
    history: null,
    from: null,
    navigateToLoginIfFail: boolean
): Promise<RESPONSE> {
    try {

        let url: string = apiUrl(controller, methodName);

        //console.debug("apiCall " + getToken() + " " + methodName + " " + authorization + " " + controller)

        //jefflog(JSON.stringify(request))
        let first = new Date();
        let response1: Response;

        response1 = await fetch(url, {
            method: "post",
            body: JSON.stringify(request),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        console.debug("Api call took " + (new Date().getTime() - first.getTime()) + " for " + url)
        //jefflog(JSON.stringify(response1))



        if (response1.status === 410) {

            let anyHack: any = {};

            return anyHack;
        }

        //if empty = server not responding then 
        //page brewer disconnected

        let jsonified = await response1.json();
        return jsonified as RESPONSE;
    } catch (err) {

        let anyHack: any = {};

        return anyHack;
    }
}