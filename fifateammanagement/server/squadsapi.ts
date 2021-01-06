import express from 'express';
import bodyParser from "body-parser";
import { GetSquadResponse, SetSquadRequest, SquadPlayer } from "../interfaces/squad"
import { BaseRequest, BaseResponse } from '../interfaces/base';
import { Recruit } from "../interfaces/recruits"

export const squadApi = express.Router();

const fileName = 'squads.json'
const recruiting = 'recruits.json'

squadApi.use(express.static('public'));

squadApi.use(bodyParser.json());

interface Player {
    uuid: string,
    name: string,
    overall: number,
    potentiel: number,
    position: string[] | string,
    country: string,
    contractType: string,
    age: number,
    value: number,
    wages: number
    atkWorkRate?: string
    defWorkRate?: string
    weakFoot?: number
    technique?: number
}

var fs = require('fs');
squadApi.post("/getSquad", (req, res) => {
    let request: BaseRequest = req.body as BaseRequest;
    let response: GetSquadResponse = {
        squads: [],
        youths: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let youths = fs.readFileSync('./public/' + request.targetTeam + recruiting, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        let allPlayers: Player[] = JSON.parse(data)
        response.squads = allPlayers.map(player => {
            return {
                uuid: player.uuid,
                name: player.name,
                overall: player.overall || 0,
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
                weakFoot: player.weakFoot || 1
            }
        })
        response.youths = (JSON.parse(youths) as Recruit[]).map(youth => {
            return {
                uuid: "",
                name: youth.name,
                overall: youth.overall,
                potentiel: ((youth.maxPotential - youth.minPotential) / 2) + youth.minPotential,
                position: youth.positions,
                country: "Chile",
                contractType: "Academy",
                age: 17,
                value: 0,
                wages: 0,
                atkWorkRate: youth.atkWorkRate,
                defWorkRate: youth.defWorkRate,
                technique: youth.technique,
                weakFoot: youth.weakFoot
            }
        })
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