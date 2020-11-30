import express from 'express';
import bodyParser from "body-parser";
import { getRecruitsListResponse, Recruit, SaveRecruitsListRequest } from "../interfaces/recruits"
import { BaseRequest, BaseResponse } from '../interfaces/base';

export const recruitsApi = express.Router();

recruitsApi.use(express.static('public'));

recruitsApi.use(bodyParser.json());

const fileName = 'recruits.json'

var fs = require('fs');
recruitsApi.post("/allRecruits", (req, res) => {
    let request: BaseRequest = req.body as BaseRequest;
    let response: getRecruitsListResponse = {
        allPlayers: [],
        success: false
    }
    try {
        let data = fs.readFileSync('./public/' + request.targetTeam + fileName, 'utf8', (err: any, jsonString: string) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
        })
        response.allPlayers = JSON.parse(data);
        response.success = true;

    } catch (err) {
        response.errorMessage = err
    }

    res.end(JSON.stringify(response));
})

recruitsApi.post("/setRecruits", (req, res) => {
    const request = req.body as SaveRecruitsListRequest
    let response: BaseResponse = {
        success: false
    }
    try {
        fs.writeFile('./public/' + request.targetTeam + fileName, JSON.stringify(request.allPlayers), (err: any) => {

        });
        response.success = true
    } catch (err) {
        response.errorMessage = err
    }
    res.end(JSON.stringify(response));
})
