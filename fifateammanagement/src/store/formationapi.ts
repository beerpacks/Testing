
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { GameRequest, GetLastTenGameRequest, GetLastTenGameResponse } from "../../interfaces/formation"
import { apiCall } from "../util/servercall";

export async function getLastTenGamesStats(request: GetLastTenGameRequest): Promise<GetLastTenGameResponse> {
    return await apiCall<GetLastTenGameRequest, GetLastTenGameResponse>(
        'formation',
        'playersstats',
        request,
        null,
        null,
        true
    );
}


export async function addNewGames(request: GameRequest): Promise<BaseResponse> {
    return await apiCall<GameRequest, BaseResponse>(
        'formation',
        'addGames',
        request,
        null,
        null,
        true
    );
}
