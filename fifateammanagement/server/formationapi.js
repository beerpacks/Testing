"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesSquadsApi = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.gamesSquadsApi = express_1.default.Router();
const fileName = 'formations.json';
const squadFile = 'squads.json';
exports.gamesSquadsApi.use(express_1.default.static('public'));
exports.gamesSquadsApi.use(body_parser_1.default.json());
var fs = require('fs');
exports.gamesSquadsApi.post("/getLastTenGamesStats", (req, res) => {
    let request = req.body;
    let response = {
        success: false,
        players: []
    };
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        let squadsData = fs.readFileSync('./public/' + request.targetTeam + squadFile, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        let squadPlayers = JSON.parse(squadsData);
        let games = []; //JSON.parse(data) as GameSquad[]
        if (games.length > 10) {
            games = games.slice(games.length - 10, games.length);
        }
        squadPlayers.forEach(player => {
            let test = games.flatMap(playerGame => {
                let playerFound = playerGame.playersList.find(playerVal => playerVal.name === player.name);
                return playerFound ? playerFound.status : "Not in Squad";
            }).reduce((presence, gameStatus) => {
                if (!(gameStatus === "Not in Squad" || gameStatus === "Benched")) {
                    presence++;
                }
                return presence;
            }, 0);
            response.players.push({ name: player.name, presence: test, contractType: player.contractType });
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
exports.gamesSquadsApi.post("/addNewGameSquads", (req, res) => {
    let request = req.body;
    let response = {
        success: false
    };
    let games = [];
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        if (data) {
            games = JSON.parse(data);
        }
        else {
            games = [];
        }
        games.push(request.gameSquad);
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(games), (err) => {
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
exports.gamesSquadsApi.post("/getGamesSquads", (req, res) => {
    let request = req.body;
    let response = {
        gamessquads: [],
        success: false
    };
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        if (data) {
            response.gamessquads = JSON.parse(data);
        }
        else {
            response.gamessquads = [];
        }
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
exports.gamesSquadsApi.post("/setGamesSquads", (req, res) => {
    let request = req.body;
    let response = {
        success: false
    };
    try {
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(request.gamessquads), (err) => {
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
//# sourceMappingURL=formationapi.js.map