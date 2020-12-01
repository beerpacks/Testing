import { BaseRequest, BaseResponse } from './base'

export interface GameSquad {
    opponent: string
    date: string
    ending: string
    result: string
    isHome: boolean
    opponentFormation: string
    gameNote: string
    playersList: GameSquadPlayer[]
}

export interface GameSquadPlayer {
    name: string
    status: string
    playerRating: string
    afterGameNote: string
}

export interface SquadStats {
    name: string
    presence: number
    contractType: string
}

export interface GetGamesSquadsResponse extends BaseResponse {
    gamessquads: GameSquad[]
}

export interface SetGamesSquadsRequest extends BaseRequest {
    gamessquads: GameSquad[]
}

export interface GetLastTenGameResponse extends BaseResponse {
    players: SquadStats[]
}

export interface AddNewGameRequest extends BaseRequest {
    gameSquad: GameSquad
}


