import { BaseRequest, BaseResponse } from './base'

export interface SquadPlayer {
    name: string,
    contractType: string
}

export interface GetSquadResponse extends BaseResponse {
    squads: SquadPlayer[]
}

export interface SetSquadRequest extends BaseRequest {
    squads: SquadPlayer[]
}