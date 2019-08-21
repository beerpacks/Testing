import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';
import { getAllPlayersRequest, getallplayersResponse } from 'src/controllertypes/playerstypes';

@Controller('api/players')
export class PlayersController {

    @Post('getallplayers')
    private getallplayers(req: getAllPlayersRequest, res: Response) {
        return res.status(200).json(this.allplayersAction(req, { names: [] }));
    }

    private allplayersAction(req: getAllPlayersRequest, res: getallplayersResponse) {
        Logger.Info("je suis entré")
        let tmp: getallplayersResponse = {
            names: ["Jf", "Sebastien"]
        }
        return tmp;
    }
}