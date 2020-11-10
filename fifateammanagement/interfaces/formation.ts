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

export interface GetLastTenGameRequest extends BaseRequest {
    players: string[]
}

export interface PlayerStats {
    name: string
    presence: number
}

export interface GetLastTenGameResponse extends BaseResponse {
    players: PlayerStats[]
}

export interface GameRequest extends BaseRequest {
    currentGame: Formation
}

