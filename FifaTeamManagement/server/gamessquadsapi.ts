import express from 'express';
import bodyParser from "body-parser";
import { GameSquad, GetLastTenGameResponse, AddNewGameRequest, GetGamesSquadsResponse, SetGamesSquadsRequest } from "../interfaces/gamesquad"
import { BaseRequest, BaseResponse } from '../interfaces/base';
import { SquadPlayer } from '../interfaces/squad';

export const gamesSquadsApi = express.Router();

const fileName = 'formations.json'
const squadFile = 'squads.json'

gamesSquadsApi.use(express.static('public'));

gamesSquadsApi.use(bodyParser.json());

var fs = require('fs');
gamesSquadsApi.post("/getLastTenGamesStats", (req, res) => {
    let request: BaseRequest = req.body as BaseRequest;
    let response: GetLastTenGameResponse = {
        success: false,
        players: []
    }
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let squadsData = fs.readFileSync('./public/' + request.targetTeam + squadFile, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let squadPlayers = JSON.parse(squadsData) as SquadPlayer[]

        let games: GameSquad[] = []//JSON.parse(data) as GameSquad[]

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
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

gamesSquadsApi.post("/addNewGameSquads", (req, res) => {
    let request: AddNewGameRequest = req.body as AddNewGameRequest;
    let response: BaseResponse = {
        success: false
    }
    let games: GameSquad[] = []
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        if (data) {
            games = JSON.parse(data) as GameSquad[]
        } else {
            games = []
        }
        games.push(request.gameSquad)
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(games), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

gamesSquadsApi.post("/getGamesSquads", (req, res) => {
    let request: BaseRequest = req.body as BaseRequest;
    let response: GetGamesSquadsResponse = {
        gamessquads: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        if (data) {
            response.gamessquads = JSON.parse(data) as GameSquad[]
        } else {
            response.gamessquads = []
        }
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

gamesSquadsApi.post("/setGamesSquads", (req, res) => {
    let request: SetGamesSquadsRequest = req.body as SetGamesSquadsRequest;
    let response: BaseResponse = {
        success: false
    }
    try {
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(request.gamessquads), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})
