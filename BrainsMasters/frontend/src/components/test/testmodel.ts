import { observable, computed, action } from "mobx";
import { Server } from "http";
import { Stores } from "../../stores/stores";

export class TestModel {


    constructor() {
        Stores.employeeStore.loadName();
        Stores.employeeStore.loadPlayers();
    }

    @computed get name() {
        return Stores.employeeStore.getName;
    }

    @computed get playersNames() {
        return Stores.employeeStore.allPlayersName;
    }

    @action
    onSetName() {
        Stores.employeeStore.setName("voila");
    }
}