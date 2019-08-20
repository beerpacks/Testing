import { observable, computed, action } from "mobx";
import { Server } from "http";
import { Stores } from "../../stores/stores";

export class TestModel {


    constructor() {
        Stores.employeeStore.loadName();
    }

    @computed get name() {
        return Stores.employeeStore.getName;
    }

    @action
    onSetName() {
        Stores.employeeStore.setName("voila");
    }
}