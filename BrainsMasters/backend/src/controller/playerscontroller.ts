import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';

@Controller('api/players')
export class PlayersController {

    @Post('getallplayers')
    private getallplayers(req: Request, res: Response) {
        Logger.Info(JSON.stringify(req.body))
        let tmp: Test = {
            names: ["Jf", "Sebastien"]
        }
        return res.status(400).json(tmp);
    }
}

interface Test {
    names: string[];
}