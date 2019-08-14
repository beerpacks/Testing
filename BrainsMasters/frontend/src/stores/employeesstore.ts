import { computed } from "mobx"

import * as Server from "../generated/api";

export class EmployeesStore {

    @computed get name() {
        let val = Server.BrainMaster.getEmployees({ isValid: true });
        //Server­.getEmployees();//.getEmployees();
        return "JF";
    }
}