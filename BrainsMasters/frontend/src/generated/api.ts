import * as BrainMasterType from "./brainmastertype";
import { apiCall } from "../utils";

export interface loginInfo {
  alternatePassword: string,
  email: string,
  password: string,
  username: string
};

export async function getEmployees(request: loginInfo) { //BrainMasterType.LoginInfoTest
  return await apiCall<loginInfo, BrainMasterType.EmployeesInfoTest>(
    'employees',
    'getallemployees',
    request,
    null,
    null,
    false
  );
}

export async function getplayerslist(request: loginInfo) { //BrainMasterType.LoginInfoTest
  return await apiCall<loginInfo, BrainMasterType.Test>(
    'players',
    'getallplayers',
    request,
    null,
    null,
    false
  );
}