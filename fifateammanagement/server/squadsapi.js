"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.squadApi = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import { Recruit } from "../interfaces/recruits"
exports.squadApi = express_1.default.Router();
const fileName = 'squads.json';
exports.squadApi.use(express_1.default.static('public'));
exports.squadApi.use(body_parser_1.default.json());
var fs = require('fs');
exports.squadApi.post("/getSquad", (req, res) => {
    const request = req.body;
    const response = {
        squads: [],
        success: false
    };
    try {
        const data = fs.readFileSync('./public/' + fileName, 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
        });
        const fileContent = JSON.parse(data);
        const squad = fileContent.squads.find(squad => squad.uuid === request.targetTeam || "jfuc");
        if (!squad) {
            throw new Error('Squad not found');
        }
        response.squads = squad.players.map(player => {
            return {
                uuid: player.uuid,
                name: player.name,
                baseOverall: player.baseOverall || 0,
                currentOverall: player.currentOverall || 0,
                potentiel: player.potentiel || 0,
                position: typeof player.position === "string" ? player.position.split(',') : player.position,
                country: player.country || "",
                contractType: player.contractType,
                age: player.age || 0,
                value: player.value || 0,
                wages: player.wages || 0,
                atkWorkRate: player.atkWorkRate || "low",
                defWorkRate: player.defWorkRate || "low",
                technique: player.technique || 1,
                weakFoot: player.weakFoot || 1,
                maxPotential: player.maxPotential || 0,
                minPotential: player.minPotential || 0,
                status: player.status || "Main Team"
            };
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
exports.squadApi.post("/addPlayer", (req, res) => {
    const request = req.body;
    const response = {
        success: false
    };
    const data = fs.readFileSync('./public/' + fileName, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
    });
    const fileContent = JSON.parse(data);
    const squad = fileContent.squads.find(squad => squad.uuid === request.targetTeam || "jfuc");
    if (!squad) {
        throw new Error('Squad not found');
    }
    squad.players.push({
        age: request.player.age,
        atkWorkRate: request.player.atkWorkRate,
        baseOverall: request.player.baseOverall,
        contractType: request.player.contractType,
        country: request.player.country,
        currentOverall: request.player.baseOverall,
        defWorkRate: request.player.defWorkRate,
        maxPotential: 0,
        minPotential: 0,
        name: request.player.name,
        position: request.player.position,
        potentiel: request.player.potentiel,
        technique: request.player.technique,
        uuid: request.player.uuid,
        value: request.player.value,
        wages: request.player.wages,
        weakFoot: request.player.weakFoot,
        status: "Main Team"
    });
    try {
        fs.writeFile('./public/' + fileName, JSON.stringify(fileContent), (err) => {
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
exports.squadApi.post("/setSquad", (req, res) => {
    let request = req.body;
    let response = {
        success: false
    };
    try {
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(request.squads), (err) => {
        });
        response.success = true;
    }
    catch (err) {
        response.errorMessage = err;
    }
    res.end(JSON.stringify(response));
});
//# sourceMappingURL=squadsapi.js.map