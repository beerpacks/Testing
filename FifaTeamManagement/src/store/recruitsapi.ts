
import { BaseRequest, BaseResponse } from "../../interfaces/base";
import { getRecruitsListResponse, SaveRecruitsListRequest } from "../../interfaces/recruits"
import { apiCall } from "../util/servercall";

export async function getAllRecruits(request: BaseRequest): Promise<getRecruitsListResponse> {
    return await apiCall<BaseRequest, getRecruitsListResponse>(
        'recruits',
        'allRecruits',
        request,
        null,
        null,
        true
    );
}

export async function setAllRecruits(request: SaveRecruitsListRequest): Promise<BaseResponse> {
    return await apiCall<SaveRecruitsListRequest, BaseResponse>(
        'recruits',
        'setRecruits',
        request,
        null,
        null,
        true
    );
}