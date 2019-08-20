import * as BrainMasterType from "./brainmastertype";
import { apiCall } from "../utils";

export interface Test {
  name: string
}

export interface loginInfo {
  alternatePassword: string,
  email: string,
  password: string,
  username: string
};

export async function getEmployees(request: loginInfo) { //BrainMasterType.LoginInfoTest
  return await apiCall<loginInfo, Test>(
    'employees',
    'getallemployees',
    request,
    null,
    null,
    false
  );
}