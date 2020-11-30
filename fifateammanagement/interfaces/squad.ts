import { BaseRequest, BaseResponse } from './base'

export interface SquadPlayer {
    uuid: string,
    name: string,
    overall: number,
    potentiel: number,
    position: string,
    country: string,
    contractType: string,
    age: number,
    value: number,
    wages: number
}

export interface GetSquadResponse extends BaseResponse {
    squads: SquadPlayer[]
}

export interface SetSquadRequest extends BaseRequest {
    squads: SquadPlayer[]
}