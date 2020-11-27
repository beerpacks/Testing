
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { GameRequest, GetLastTenGameResponse, TeamSheetsResponse, TeamSheetsRequest } from "../../interfaces/formation"
import { apiCall } from "../util/servercall";

export async function setAllTeamSheet(request: TeamSheetsRequest): Promise<BaseResponse> {
    return await apiCall<TeamSheetsRequest, BaseResponse>(
        'formation',
        'setteamsheets',
        request,
        null,
        null,
        true
    );
}

export async function getAllTeamSheet(request: BaseRequest): Promise<TeamSheetsResponse> {
    return await apiCall<BaseRequest, TeamSheetsResponse>(
        'formation',
        'teamsheets',
        request,
        null,
        null,
        true
    );
}

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
