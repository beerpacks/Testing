import { computed } from "mobx"

import * as Server from "../generated/api";

export class EmployeesStore {

    @computed get name() {
        let val = "JF";
        Server.getEmployees({ isValid: true }).then(te => {
            val = te.name;
        });
        console.debug(JSON.stringify(val))
        //Server­.getEmployees();//.getEmployees();
        return "JF"// val || "JF";
    }
}