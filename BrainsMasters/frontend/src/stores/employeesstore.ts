import { computed, observable, action } from "mobx"

import * as Server from "../generated/api";

export class EmployeesStore {

    @observable name: string = "jf";

    @computed get getName() {
        return this.name;
    }

    async loadName() {
        let input: Server.loginInfo = {
            alternatePassword: "",
            email: "email",
            password: "password",
            username: ""
        };

        try {
            let tmp = await Server.getEmployees(input);
            console.debug(JSON.stringify(tmp))
            if (tmp.name.length > 0) {
                this.name = tmp.name;
            }
        } catch (err) {

        }
    }

    setName(naming: string) {
        this.name = naming;
    }
}