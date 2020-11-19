
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { GameRequest, GetLastTenGameResponse } from "../../interfaces/formation"
import { apiCall } from "../util/servercall";

export async function getLastTenGamesStats(request: BaseRequest): Promise<GetLastTenGameResponse> {
    return await apiCall<BaseRequest, GetLastTenGameResponse>(
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
