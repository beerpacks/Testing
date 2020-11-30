
export interface BaseRequest {
    targetTeam?: string
}

export interface BaseResponse {
    success: boolean;
    errorMessage?: string;
}