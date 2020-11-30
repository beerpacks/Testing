"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTheServer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const formationapi_1 = require("./formationapi");
const squadsapi_1 = require("./squadsapi");
const recruitsapi_1 = require("./recruitsapi");
function startTheServer() {
    const app = express_1.default();
    if (!process.env.NODE_ENV) {
        console.log("NODE_ENV is not specified, production will be assumed");
    }
    if (!process.env.NODE_EXTRA_CA_CERTS) {
        console.log("NODE_EXTRA_CA_CERTS is not specified, you might have kaspersky problems.");
        // add "env": { "NODE_EXTRA_CA_CERTS": "./Kaspersky.cer" } to launch.json if needed for debug.
        // use set NODE_EXTRA_CA_CERTS=./Kaspersky.cer in console
    }
    app.use(body_parser_1.default.urlencoded({
        extended: true,
    }));
    app.use(cors_1.default());
    app.use('/api/recruits', recruitsapi_1.recruitsApi);
    app.use('/api/formation', formationapi_1.formationApi);
    app.use('/api/squad', squadsapi_1.squadApi);
    /*
        if (app.get('env') === 'production') {
            app.set('trust proxy', 1) // trust first proxy
        }
    */
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.raw());
    //app.use(express.static(path.join(__dirname, "../build")));
    /*app.get("*", function (req: any, res: any) {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });*/
    app.listen(process.env.PORT || 8080);
    console.log(process.env.PORT || 8080);
}
exports.startTheServer = startTheServer;
//# sourceMappingURL=app.js.map