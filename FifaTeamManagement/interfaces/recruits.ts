import { BaseRequest, BaseResponse } from './base'

export interface Recruit {
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

export interface getRecruitsListResponse extends BaseResponse {
    allPlayers: Recruit[]
}

export interface SaveRecruitsListRequest extends BaseRequest {
    allPlayers: Recruit[]
}