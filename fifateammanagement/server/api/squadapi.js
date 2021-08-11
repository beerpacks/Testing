"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquadServer = void 0;
const squad_pb_1 = require("../generated/squad_pb");
class SquadServer {
    getSquad(call, callback) {
        console.log("voici la list");
        const test = new squad_pb_1.SquadPlayerList();
        const player = new squad_pb_1.SquadPlayer();
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
        callback(null, test);
    }
    addPlayer(call, callback) {
        console.log("un joueur");
        call.on('data', (test) => {
            console.log("nouveau joueur");
        });
        const res = new squad_pb_1.SquadBaseResponse();
        call.on('end', () => callback(null, res));
    }
}
exports.SquadServer = SquadServer;
//# sourceMappingURL=squadapi.js.map