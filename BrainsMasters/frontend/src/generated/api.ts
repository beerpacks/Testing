import * as BrainMasterType from "./brainmastertype";
import { apiCall } from "../utils";

export async function getEmployees(request: BrainMasterType.LoginInfoTest) {
  return await apiCall<BrainMasterType.LoginInfoTest, BrainMasterType.EmployeesInfoTest>(
    'Login',
    'login',
    request,
    null,
    null,
    false
  );
}