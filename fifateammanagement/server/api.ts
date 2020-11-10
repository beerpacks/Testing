import express from 'express';
import { Testing } from "../interfaces/test"

export const api = express.Router();

api.post("/test", (req, res) => {
    let tmp: Testing = {
        namerString: "viola",
        success: true
    }
    res.end(JSON.stringify(tmp));
    console.debug("un deux")
    /*
    if (!req.headers.authorization || !req.headers.authorization.toLowerCase().startsWith("bearer"))
    {
        res.end(JSON.stringify({ success: false, errorMessage: "Authorization required" }));
    } else {
        let token = req.headers.authorization.substr(req.headers.authorization.indexOf(' ') + 1).trim();
        let authorized = await dataAccessAzureInstance.validateTokenExpiredAsync(token);
        if (!authorized) {

            if (authorized == null)
                res.end(JSON.stringify({ success: false, errorMessage: "Invalid token" }));
            else
                res.end(JSON.stringify({ success: false, errorMessage: "Expired token" }));
        } else {
            next();
        }
    }*/
});