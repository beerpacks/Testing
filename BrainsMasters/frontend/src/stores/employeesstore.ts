import { computed, observable, action } from "mobx"
import * as Server from "../generated/playerscontroller";
export class EmployeesStore {

    @observable name: string = "jf";

    @observable playersName: string[] = ["adsf", "qwer"];

    @computed get getName() {
        return this.name;
    }

    @computed get allPlayersName() {
        return this.playersName;
    }

    async loadName() {
        /*
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

        }*/
    }

    async loadPlayers() {
        try {
            let tmp = await Server.getallplayers({});
            console.debug(JSON.stringify(tmp))
            this.playersName = tmp.names;
        } catch (err) {

        }
    }

    setName(naming: string) {
        this.name = naming;
    }
}