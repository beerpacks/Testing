"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
exports.api = express_1.default.Router();
exports.api.post("/test", (req, res) => {
    let tmp = {
        namerString: "viola",
        success: true
    };
    res.end(JSON.stringify(tmp));
    console.debug("un deux");
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
//# sourceMappingURL=api.js.map