import { BaseRequest, BaseResponse } from './base'

export interface SquadPlayer {
    uuid: string,
    name: string,
    overall: number,
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
    technique: number
}

export interface GetSquadResponse extends BaseResponse {
    squads: SquadPlayer[]
    youths: SquadPlayer[]
}

export interface SetSquadRequest extends BaseRequest {
    squads: SquadPlayer[]
}