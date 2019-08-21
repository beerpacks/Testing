import { apiCall } from "../utils";
import * as playerstypes from "./playerstypes";
export async function getallplayers(request:playerstypes.getAllPlayersRequest){
return await apiCall<playerstypes.getAllPlayersRequest,playerstypes.getallplayersResponse>(
'players',
'getallplayers',
request,
null,
null,
false
);
}
