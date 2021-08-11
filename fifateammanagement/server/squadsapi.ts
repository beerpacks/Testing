import express from 'express';
import bodyParser from "body-parser";
import { AddPlayerRequest, GetSquadResponse, SetSquadRequest, SquadPlayer } from "../interfaces/squad"
import { BaseRequest, BaseResponse } from '../interfaces/base';
//import { Recruit } from "../interfaces/recruits"

export const squadApi = express.Router();

const fileName = 'squads.json'

squadApi.use(express.static('public'));

squadApi.use(bodyParser.json());

interface SquadList{
    squads:Squad[]
}

interface Squad{
    uuid:string,
    players:Player[]
}

interface Player {
    uuid: string,
    name: string,
    baseOverall: number,
    currentOverall:number,
    potentiel: number,
    position: string[] | string,
    country: string,
    contractType: string,
    age: number,
    value: number,
    wages: number
    atkWorkRate: string
    defWorkRate: string
    weakFoot: number
    technique: number
    minPotential:number
    maxPotential:number,
    status:string
}

var fs = require('fs');
squadApi.post("/getSquad", (req, res) => {
    const request: BaseRequest = req.body as BaseRequest;
    const response: GetSquadResponse = {
        squads: [],
        success: false
    }
    try {
        const data = fs.readFileSync('./public/' +fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        const fileContent : SquadList = JSON.parse(data);
        const squad = fileContent.squads.find(squad => squad.uuid === request.targetTeam || "jfuc");
        if(!squad){
            throw new Error('Squad not found');
        }
        response.squads = squad.players.map(player => {
            return {
                uuid: player.uuid,
                name: player.name,
                baseOverall: player.baseOverall || 0,
                currentOverall:player.currentOverall || 0,
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
                maxPotential : player.maxPotential || 0,
                minPotential : player.minPotential || 0,
                status:player.status || "Main Team"
            }
        })
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})

squadApi.post("/addPlayer",(req,res)=>{
    const request: AddPlayerRequest = req.body as AddPlayerRequest;
    const response: BaseResponse = {
        success: false
    }
    const data = fs.readFileSync('./public/' +fileName, 'utf8', (err: any, jsonString: string) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
    })
    const fileContent : SquadList = JSON.parse(data);
    const squad = fileContent.squads.find(squad => squad.uuid === request.targetTeam || "jfuc");
    if(!squad){
        throw new Error('Squad not found');
    }
    squad.players.push({
        age : request.player.age,
        atkWorkRate:request.player.atkWorkRate,
        baseOverall:request.player.baseOverall,
        contractType:request.player.contractType,
        country:request.player.country,
        currentOverall:request.player.baseOverall,
        defWorkRate:request.player.defWorkRate,
        maxPotential:0,
        minPotential:0,
        name:request.player.name,
        position:request.player.position,
        potentiel:request.player.potentiel,
        technique:request.player.technique,
        uuid:request.player.uuid,
        value:request.player.value,
        wages:request.player.wages,
        weakFoot:request.player.weakFoot,
        status:"Main Team"
    });
    try {
        fs.writeFile('./public/' + fileName, JSON.stringify(fileContent), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
});

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