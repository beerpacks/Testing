import { BaseRequest, BaseResponse } from './base'

export interface Player {
    name: string
}

export interface PlayersListResponse extends BaseResponse {
    allPlayers: Player[]
}