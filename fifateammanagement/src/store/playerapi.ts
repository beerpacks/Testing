
import { PlayersListResponse } from "../../interfaces/players"
import { apiCall } from "../util/servercall";

export async function getAllPlayers(): Promise<PlayersListResponse> {
    return await apiCall<string, PlayersListResponse>(
        'player',
        'players',
        "",
        null,
        null,
        true
    );
}