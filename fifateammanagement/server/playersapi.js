"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersApi = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
exports.playersApi = express_1.default.Router();
exports.playersApi.use(express_1.default.static('public'));
exports.playersApi.use(body_parser_1.default.json());
var fs = require('fs');
exports.playersApi.post("/players", (req, res) => {
    let players = [];
    let success = false;
    let data = fs.readFileSync('./public/recruits.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
    });
    console.debug(data);
    if (data) {
        players = JSON.parse(data);
        success = true;
    }
    let response = {
        allPlayers: players,
        success: success
    };
    res.end(JSON.stringify(response));
});
exports.playersApi.post("/setPlayers", (req, res) => {
    const values = req.body;
    savePlayers(values.allPlayers, () => { });
    res.end();
});
function savePlayers(players, callback) {
    fs.writeFile('./public/recruits.json', JSON.stringify(players), callback);
}
//# sourceMappingURL=playersapi.js.map