import express from 'express';
import bodyParser from "body-parser";
import { GetSquadResponse, SetSquadRequest, SquadPlayer } from "../interfaces/squad"
import { BaseResponse } from '../interfaces/base';

export const squadApi = express.Router();

const fileName = 'squads.json'

squadApi.use(express.static('public'));

squadApi.use(bodyParser.json());

var fs = require('fs');
squadApi.post("/getSquad", (req, res) => {
    let response: GetSquadResponse = {
        squads: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        console.debug(JSON.stringify(data))
        response.squads = JSON.parse(data)
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
        fs.writeFile('./public/' + fileName, JSON.stringify(request.squads), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})