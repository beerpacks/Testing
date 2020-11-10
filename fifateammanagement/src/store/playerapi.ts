
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { PlayersListResponse, SavePlayersListRequest } from "../../interfaces/players"
import { apiCall } from "../util/servercall";

export async function getAllPlayers(request: BaseRequest): Promise<PlayersListResponse> {
    return await apiCall<BaseRequest, PlayersListResponse>(
        'player',
        'players',
        request,
        null,
        null,
        true
    );
}

export async function setAllPlayers(request: SavePlayersListRequest): Promise<BaseResponse> {
    return await apiCall<SavePlayersListRequest, BaseResponse>(
        'player',
        'setPlayers',
        request,
        null,
        null,
        true
    );
}