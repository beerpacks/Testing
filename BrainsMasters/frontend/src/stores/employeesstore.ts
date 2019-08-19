import { computed, observable } from "mobx"

import * as Server from "../generated/api";

export class EmployeesStore {

    @observable name: string = "jf";

    @computed get getName() {
        return this.name;
    }

    async loadName() {
        try {
            let tmp = await Server.getEmployees("");
            console.debug(JSON.stringify(tmp))
            if (tmp.name.length > 0) {
                this.name = tmp.name;
            }
        } catch (err) {

        }
    }
}