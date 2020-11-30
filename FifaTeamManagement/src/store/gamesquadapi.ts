
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { AddNewGameRequest, GetGamesSquadsResponse, GetLastTenGameResponse, SetGamesSquadsRequest } from "../../interfaces/gamesquad";
import { apiCall } from "../util/servercall";

export async function setGamesSquads(request: SetGamesSquadsRequest): Promise<BaseResponse> {
    return await apiCall<SetGamesSquadsRequest, BaseResponse>(
        'gamessquads',
        'setGamesSquads',
        request,
        null,
        null,
        true
    );
}

export async function getGamesSquads(request: BaseRequest): Promise<GetGamesSquadsResponse> {
    return await apiCall<BaseRequest, GetGamesSquadsResponse>(
        'gamessquads',
        'getGamesSquads',
        request,
        null,
        null,
        true
    );
}

export async function getLastTenGamesStats(request: BaseRequest): Promise<GetLastTenGameResponse> {
    return await apiCall<BaseRequest, GetLastTenGameResponse>(
        'gamessquads',
        'getLastTenGamesStats',
        request,
        null,
        null,
        true
    );
}


export async function addNewGames(request: AddNewGameRequest): Promise<BaseResponse> {
    return await apiCall<AddNewGameRequest, BaseResponse>(
        'gamessquads',
        'addNewGameSquads',
        request,
        null,
        null,
        true
    );
}
