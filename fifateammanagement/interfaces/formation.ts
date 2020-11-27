import { BaseRequest, BaseResponse } from './base'

export interface Formation {
    opponent: string
    date: string
    playersList: FormationPlayer[]
}

export interface FormationPlayer {
    name: string
    status: string
    afterGameNote: string
}

export interface PlayerStats {
    name: string
    presence: number
    contractType: string
}

export interface TeamSheetsResponse extends BaseResponse {
    teamSheets: Formation[]
}

export interface TeamSheetsRequest extends BaseRequest {
    teamSheets: Formation[]
}

export interface GetLastTenGameResponse extends BaseResponse {
    players: PlayerStats[]
}

export interface GameRequest extends BaseRequest {
    currentGame: Formation
}

