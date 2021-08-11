import { sendUnaryData, ServerUnaryCall } from 'grpc';
import {ISquadServiceServer} from '../generated/squad_grpc_pb';
import { SquadBaseRequest, SquadPlayerList, AddPlayerRequest, SquadBaseResponse, SquadPlayer } from '../generated/squad_pb';

export class SquadServer implements ISquadServiceServer{

    getSquad(call:ServerUnaryCall<SquadBaseRequest>, callback:sendUnaryData<SquadPlayerList>):void{
        console.log("voici la list");
        const test : SquadPlayerList = new SquadPlayerList();
        const player : SquadPlayer = new SquadPlayer();
        player.setUuid("1234A")
        .setName("jf")
        .setBaseoverall(1)
        .setCurrentoverall(2)
        .setPotentiel(3)
        .setPositionList(["ST,LW"])
        .setCountry("Canada")
        .setContracttype("Crucial")
        .setAge(18)
        .setValue(5000000)
        .setWages(565)
        .setAtkworkrate("High")
        .setDefworkrate("Low")
        .setTechnique(5)
        .setWeakfoot(4)
        .setStatus("Main Team");
        test.setSquadsList([player]);
        callback(null,test);
    } 
    addPlayer(call:ServerUnaryCall<AddPlayerRequest>,callback:sendUnaryData<SquadBaseResponse>):void{
        console.log("un joueur");
        call.on('data', (test: AddPlayerRequest) => {
            console.log("nouveau joueur")
        });
        const res :SquadBaseResponse = new SquadBaseResponse();
        call.on('end', () => callback(null, res));
    }

}