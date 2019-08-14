import { EmployeesStore } from "./employeesstore";
import { computed } from "mobx";

export namespace Stores {
    export let employeesStore: EmployeesStore = new EmployeesStore();
    //export class Employees {

    //}
    /*
        @computed get employees() {
            return this.employeesStore;
        }*/
}