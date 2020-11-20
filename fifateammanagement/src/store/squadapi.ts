
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { GetSquadResponse, SetSquadRequest } from "../../interfaces/squad"
import { apiCall } from "../util/servercall";

export async function getSquad(request: BaseRequest): Promise<GetSquadResponse> {
    return await apiCall<BaseRequest, GetSquadResponse>(
        'squad',
        'getSquad',
        request,
        null,
        null,
        true
    );
}

export async function setSquad(request: SetSquadRequest): Promise<BaseResponse> {
    return await apiCall<SetSquadRequest, BaseResponse>(
        'squad',
        'setSquad',
        request,
        null,
        null,
        true
    );
}