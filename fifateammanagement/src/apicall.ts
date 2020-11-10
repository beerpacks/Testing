import * as Login from '../interfaces/test'


export async function validatePasswordReqAsync(): Promise<Login.Testing> {
    console.debug("je commence")
    let response = fetch(origin + "/test", {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    });

    /*
    let response = await fetch(`${origin}/test`, {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: "{}"
    }).catch(err => {
        console.debug("err " + err)
        throw err;
    }).then(res => {
        console.debug("res")
        return res.json();
    });

    */return { success: false, namerString: "" };
}