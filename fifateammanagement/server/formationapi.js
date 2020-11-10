"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationApi = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.formationApi = express_1.default.Router();
const fileName = 'formations.json';
exports.formationApi.use(express_1.default.static('public'));
exports.formationApi.use(body_parser_1.default.json());
var fs = require('fs');
exports.formationApi.post("/playersstats", (req, res) => {
    let response = {
        success: false,
        players: []
    };
    let playersRequest = req.body.players;
    let games = [];
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        games = JSON.parse(data);
        if (games.length > 10) {
            games = games.slice(games.length - 10, games.length);
        }
        playersRequest.forEach(player => {
            let test = games.flatMap(playerGame => {
                let playerFound = playerGame.playersList.find(playerVal => playerVal.name === player);
                return playerFound ? playerFound.status : "Not in Squad";
            }).reduce((presence, gameStatus) => {
                if (!(gameStatus === "Not in Squad" || gameStatus === "Benched")) {
                    presence++;
                }
                return presence;
            }, 0);
            response.players.push({ name: player, presence: test });
        });
        response.success = true;
    }
    catch (err) {
        console.debug(err);
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
//GameRequest
exports.formationApi.post("/addGames", (req, res) => {
    let request = req.body;
    let response = {
        success: false
    };
    let games = [];
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        games = JSON.parse(data);
        games.push(request.currentGame);
        fs.writeFile('./public/' + fileName, JSON.stringify(games), (err) => {
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
/*
playersApi.post("/setPlayers", (req, res) => {
    const values = req.body as SavePlayersListRequest
    savePlayers(values.allPlayers, () => { })
    res.end();
})


function savePlayers(players: Player[], callback: () => void) {
    fs.writeFile('./public/recruits.json', JSON.stringify(players), callback);
}
*/ 
//# sourceMappingURL=formationapi.js.map