import express from 'express';
import bodyParser from "body-parser";
import { Formation, GameRequest, GetLastTenGameResponse, TeamSheetsResponse, TeamSheetsRequest } from "../interfaces/formation"
import { BaseResponse } from '../interfaces/base';
import { SquadPlayer } from '../interfaces/squad';

export const formationApi = express.Router();

const fileName = 'formations.json'
const squadFile = 'squads.json'

formationApi.use(express.static('public'));

formationApi.use(bodyParser.json());

var fs = require('fs');
formationApi.post("/playersstats", (req, res) => {
    let response: GetLastTenGameResponse = {
        success: false,
        players: []
    }


    let games: Formation[] = []
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let squadPlayers = JSON.parse(fs.readFileSync('./public/' + squadFile, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })) as SquadPlayer[]


        games = JSON.parse(data)
        if (games.length > 10) {
            games = games.slice(games.length - 10, games.length)
        }
        squadPlayers.forEach(player => {
            let test = games.flatMap(playerGame => {
                let playerFound = playerGame.playersList.find(playerVal => playerVal.name === player.name)
                return playerFound ? playerFound.status : "Not in Squad"
            }).reduce((presence: number, gameStatus: string) => {
                if (!(gameStatus === "Not in Squad" || gameStatus === "Benched")) {
                    presence++;
                }
                return presence
            }, 0)
            response.players.push({ name: player.name, presence: test, contractType: player.contractType })
        })

        response.success = true
    } catch (err) {
        console.debug(err)
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

//GameRequest
formationApi.post("/addGames", (req, res) => {
    let request: GameRequest = req.body as GameRequest;
    let response: BaseResponse = {
        success: false
    }
    let games: Formation[] = []
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        games = JSON.parse(data)
        games.push(request.currentGame)
        fs.writeFile('./public/' + fileName, JSON.stringify(games), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

formationApi.post("/teamsheets", (req, res) => {
    let response: TeamSheetsResponse = {
        teamSheets: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        response.teamSheets = JSON.parse(data) as Formation[]
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

formationApi.post("/setteamsheets", (req, res) => {
    let request: TeamSheetsRequest = req.body as TeamSheetsRequest;
    let response: BaseResponse = {
        success: false
    }
    try {
        fs.writeFile('./public/' + fileName, JSON.stringify(request.teamSheets), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})


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