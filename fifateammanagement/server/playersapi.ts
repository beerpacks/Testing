import express from 'express';
import bodyParser from "body-parser";
import { Player, PlayersListResponse, SavePlayersListRequest } from "../interfaces/players"

export const playersApi = express.Router();

playersApi.use(express.static('public'));

playersApi.use(bodyParser.json());

var fs = require('fs');
playersApi.post("/players", (req, res) => {
    let players: Player[] = [];
    let success: boolean = false;
    let data = fs.readFileSync('./public/recruits.json', 'utf8', (err: any, jsonString: string) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
    })
    console.debug(data)
    if (data) {
        players = JSON.parse(data);
        success = true;
    }
    let response: PlayersListResponse = {
        allPlayers: players,
        success: success
    }
    res.end(JSON.stringify(response));
})

playersApi.post("/setPlayers", (req, res) => {
    const values = req.body as SavePlayersListRequest
    savePlayers(values.allPlayers, () => { })
    res.end();
})


function savePlayers(players: Player[], callback: () => void) {
    fs.writeFile('./public/recruits.json', JSON.stringify(players), callback);
}
