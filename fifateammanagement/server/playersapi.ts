import express from 'express';
import { PlayersListResponse } from "../interfaces/players"

export const playersApi = express.Router();

playersApi.post("/players", (req, res) => {
    let response: PlayersListResponse = {
        allPlayers: [
            {
                name: "JF"
            }, {
                name: "Simon-Pierre"
            }
        ],
        success: true
    }
    res.end(JSON.stringify(response));
})
