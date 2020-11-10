import { computed, observable, observe } from "mobx";
import { getAllPlayers } from "./playerapi";

export class PlayersStore {

    @observable allPlayers: PlayerStore[] = []
    async getAllPlayer() {
        try {
            let serverRequest = await getAllPlayers()
            return serverRequest.allPlayers
        } catch (err) {
            console.debug(err)
            return []
        }
    }
}

export class PlayerStore {
    @observable id: string = "";
    @observable name: string = "";
    @observable positions: Array<string> = [];
    @observable minPotential: number = 0;
    @observable maxPotential: number = 0;
    @observable atkWorkRate: string = "";
    @observable defWorkRate: string = "";
    @observable weakFook: number = 0;
    @observable technique: number = 0;
    @observable status: string = "";
    constructor(id?: string, name?: string, positions?: string[], minPotential?: number, maxPotential?: number, atkWorkRate?: string, defWorkRate?: string, weakFook?: number, technique?: number, status?: string) {
        this.id = id || "";
        this.name = name || "";
        this.positions = positions || []
        this.minPotential = minPotential || 0;
        this.maxPotential = maxPotential || 0;
        this.atkWorkRate = atkWorkRate || "";
        this.defWorkRate = defWorkRate || "";
        this.weakFook = weakFook || 0;
        this.technique = technique || 0;
        this.status = status || "";
    }


}