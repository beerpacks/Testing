import { BaseRequest, BaseResponse } from './base'

export interface SquadPlayer {
    uuid: string,
    name: string,
    baseOverall: number,
    currentOverall:number,
    potentiel: number,
    position: string[],
    country: string,
    contractType: string,
    age: number,
    value: number,
    wages: number
    atkWorkRate: string
    defWorkRate: string
    weakFoot: number
    technique: number,
    minPotential:number,
    maxPotential:number,
    status:string
}

export interface GetSquadResponse extends BaseResponse {
    squads: SquadPlayer[]
}

export interface AddPlayerRequest extends BaseRequest{
    player:SquadPlayer
}

export interface SetSquadRequest extends BaseRequest {
    squads: SquadPlayer[]
}