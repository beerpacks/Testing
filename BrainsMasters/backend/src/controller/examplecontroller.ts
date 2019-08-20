import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api/employees')
export class ExampleController {

    @Get('')
    private getMessage(req: Request, res: Response) {
        Logger.Info(req);
        res.status(200).json(
            {
                name: "normand"
            }
        );
    }

    @Get('getallemployees')
    private getallemployees(req: Request, res: Response) {
        Logger.Info("hein");
        res.status(200).json(
            {
                name: "test"
            }
        );
    }
    /*
    {
            message: req.params.msg,
        }
    */

    @Put(':msg')
    private putMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Post('getallemployees')
    private postMessage(req: Request, res: Response) {
        Logger.Info("ici");
        return res.status(400).json({
            name: "from server"
        });
    }

    @Delete(':msg')
    private delMessage(req: Request, res: Response) {
        try {
            throw new Error(req.params.msg);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(400).json({
                error: req.params.msg,
            });
        }
    }
}