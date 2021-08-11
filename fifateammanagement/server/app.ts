import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import * as grpc from "grpc";
//import { gamesSquadsApi } from "./gamessquadsapi";
import { SquadServer } from "./api/squadapi";
import { SquadServiceService } from "./generated/squad_grpc_pb";
//import { recruitsApi } from "./recruitsapi";


export function startTheServer() {
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

    server.addService(SquadServiceService, new SquadServer());

    server.bindAsync("127.0.0.1:8080",grpc.ServerCredentials.createInsecure(),(callback,port)=>{
        console.log("Server running at http://127.0.0.1:8080");
        console.log("j'écoute les communications")
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
