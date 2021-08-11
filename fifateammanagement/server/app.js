"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTheServer = void 0;
const grpc = __importStar(require("grpc"));
//import { gamesSquadsApi } from "./gamessquadsapi";
const squadapi_1 = require("./api/squadapi");
const squad_grpc_pb_1 = require("./generated/squad_grpc_pb");
//import { recruitsApi } from "./recruitsapi";
function startTheServer() {
    /*
    const PROTO_PATH = "./proto/squad.proto";

    const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
        keepCase:true,
        longs:String,
        enums:String,
        arrays:true
    });

    const squadProto = grpc.loadPackageDefinition(packageDefinition);
*/
    const server = new grpc.Server();
    server.addService(squad_grpc_pb_1.SquadServiceService, new squadapi_1.SquadServer());
    server.bindAsync("127.0.0.1:8080", grpc.ServerCredentials.createInsecure(), (callback, port) => {
        console.log("Server running at http://127.0.0.1:8080");
        console.log("j'écoute les communications");
        server.start();
    });
    /*
    const app = express();


    if (!process.env.NODE_ENV) {
        console.log("NODE_ENV is not specified, production will be assumed");
    }
    if (!process.env.NODE_EXTRA_CA_CERTS) {
        console.log("NODE_EXTRA_CA_CERTS is not specified, you might have kaspersky problems.");
        // add "env": { "NODE_EXTRA_CA_CERTS": "./Kaspersky.cer" } to launch.json if needed for debug.
        // use set NODE_EXTRA_CA_CERTS=./Kaspersky.cer in console
    }


    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );

    app.use(cors());

    //app.use('/api/recruits', recruitsApi)

    //app.use('/api/gamessquads', gamesSquadsApi);

    app.use('/api/squad', squadApi);
    /*
        if (app.get('env') === 'production') {
            app.set('trust proxy', 1) // trust first proxy
        }
    
    app.use(bodyParser.json());
    app.use(bodyParser.raw());

    //app.use(express.static(path.join(__dirname, "../build")));

    /*app.get("*", function (req: any, res: any) {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });

    app.listen(process.env.PORT || 8080);
    console.log(process.env.PORT || 8080);
    */
}
exports.startTheServer = startTheServer;
//# sourceMappingURL=app.js.map