import { BaseRequest, BaseResponse } from './base'

export interface Player {
    name: string
    positions: string[]
    minPotential: number
    maxPotential: number
    atkWorkRate: string
    defWorkRate: string
    weakFoot: number
    technique: number
    status: string
    overall: number
    note: string
}

export interface PlayersListResponse extends BaseResponse {
    allPlayers: Player[]
}

export interface SavePlayersListRequest extends BaseRequest {
    allPlayers: Player[]
}