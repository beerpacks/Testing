import { action, computed, makeAutoObservable, observable } from "mobx";
import { getAllPlayers, setAllPlayers } from "../store/playerapi";
import { uuidv4 } from "../util/servercall"

export class RecruitsModel {
    recruitsList: Recruits[];

    constructor() {
        makeAutoObservable(this)
        this.recruitsList = []
        this.loadRecruits()
    }

    loadRecruits() {
        getAllPlayers({}).then((serverVal) => {
            if (serverVal.success) {
                this.recruitsList = observable.array(serverVal.allPlayers.map(recruit => {
                    return new Recruits(recruit.name, recruit.positions, recruit.minPotential, recruit.maxPotential, recruit.atkWorkRate, recruit.defWorkRate, recruit.weakFoot, recruit.technique, recruit.status)
                }))
            }
        });
    }

    @action
    addRecruits() {
        let newRecruits = new Recruits("")
        newRecruits.isEditting = true
        this.recruitsList.push(newRecruits)
    }

    @action
    save() {
        setAllPlayers({
            allPlayers: this.recruitsList.map(recruit => {
                return {
                    name: recruit.name,
                    positions: recruit.positions,
                    minPotential: recruit.minPotential,
                    maxPotential: recruit.maxPotential,
                    atkWorkRate: recruit.atkWorkRate,
                    defWorkRate: recruit.defWorkRate,
                    weakFoot: recruit.weakFoot,
                    technique: recruit.technique,
                    status: recruit.status
                }
            })
        })
    }

    @action
    cancel() {
        this.recruitsList = []
        this.loadRecruits()
    }

    @action
    deleteRecruits(model: Recruits) {
        this.recruitsList = this.recruitsList.filter(recruit => recruit !== model)
    }
}

export class Recruits {
    id: string
    name: string
    positions: string[]
    minPotential: number
    maxPotential: number
    atkWorkRate: string
    defWorkRate: string
    weakFoot: number
    technique: number
    status: string
    isEditting: boolean

    constructor(name?: string, positons?: string[], minPotential?: number, maxPotential?: number, atkWorkRate?: string, defWorkRate?: string, weakFoot?: number, technique?: number, status?: string) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.name = name || "";
        this.positions = positons || []
        this.minPotential = minPotential || 0;
        this.maxPotential = maxPotential || 0;
        this.atkWorkRate = atkWorkRate || "Low"
        this.defWorkRate = defWorkRate || "Low"
        this.weakFoot = weakFoot || 1;
        this.technique = technique || 1;
        this.status = status || "new"
        this.isEditting = false
    }

    @computed get midPotential() {
        return (this.maxPotential - this.minPotential) / 2 + this.minPotential
    }

    @computed get fullRating() {
        return this.midPotential +
            (this.atkWorkRate === "High" ? 100 : this.atkWorkRate === "Medium" ? 50 : 0) +
            (this.defWorkRate === "High" ? 100 : this.defWorkRate === "Medium" ? 50 : 0) +
            (this.weakFoot * 20) +
            (this.technique * 20)
    }

    @computed get playerPosition() {
        return this.positions.join();
    }

    @action
    setPosition(newPosition: string) {
        if (this.positions.find(pos => pos === newPosition) !== undefined) {
            this.positions = this.positions.filter(pos => pos !== newPosition);
        } else {
            this.positions.push(newPosition)
        }
    }

    @action
    setEditting() {
        this.isEditting = !this.isEditting
    }

}