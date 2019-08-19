import * as BrainMasterType from "./brainmastertype";
import { apiCall } from "../utils";

export interface Test {
  name: string
}

export async function getEmployees(request: string) { //BrainMasterType.LoginInfoTest
  return await apiCall<string, Test>(
    'employees',
    'getallemployees',
    request,
    null,
    null,
    false
  );
}