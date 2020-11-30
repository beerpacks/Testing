import express from 'express';
import bodyParser from "body-parser";
import { GetSquadResponse, SetSquadRequest, SquadPlayer } from "../interfaces/squad"
import { BaseRequest, BaseResponse } from '../interfaces/base';

export const squadApi = express.Router();

const fileName = 'squads.json'

squadApi.use(express.static('public'));

squadApi.use(bodyParser.json());

var fs = require('fs');
squadApi.post("/getSquad", (req, res) => {
    let request: BaseRequest = req.body as BaseRequest;
    let response: GetSquadResponse = {
        squads: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let allPlayers: SquadPlayer[] = JSON.parse(data)
        response.squads = allPlayers        
        /*response.squads = allPlayers.map(player => {
            return {
                uuid: player.uuid,
                name: player.name,
                overall: player.overall || 0,
                potentiel: player.potentiel || 0,
                position: player.position || "",
                country: player.country || "",
                contractType: player.contractType,
                age: player.age || 0,
                value: player.value || 0,
                wages: player.wages || 0
            }
        })*/
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

squadApi.post("/setSquad", (req, res) => {
    let request: SetSquadRequest = req.body as SetSquadRequest;
    let response: BaseResponse = {
        success: false
    }
    try {
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(request.squads), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})