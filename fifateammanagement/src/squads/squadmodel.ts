import { action, makeAutoObservable, observable } from "mobx"
import { getSquad, setSquad } from "../store/squadapi"
import { uuidv4 } from "../util/servercall"

export class SquadModel {

    playerList: Player[]

    constructor() {
        makeAutoObservable(this)
        this.playerList = observable.array();
        this.loadSquadPlayer()
    }

    async loadSquadPlayer() {
        let values = await getSquad({});
        if (values.success) {
            this.playerList = observable.array(values.squads.map(player => {
                return new Player(player.name, player.contractType)
            }))
        }
    }

    @action
    saveSquad() {
        setSquad({
            squads: this.playerList.map(player => {
                return {
                    contractType: player.contractType,
                    name: player.name
                }
            })
        }).then(res => {
            if (res.success)
                this.loadSquadPlayer()
        })
    }

    @action
    cancel() {
        this.loadSquadPlayer()
    }

    @action
    deletePlayer(model: Player) {
        this.playerList = this.playerList.filter(player => player !== model)
    }

    @action
    addSquadPlayer() {
        this.playerList.push(new Player(""))
    }
}

export class Player {
    id: string
    name: string
    contractType: string
    isEdditing: boolean
    constructor(name: string, contract?: string) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.name = name;
        this.contractType = contract ? contract : "Future"
        this.isEdditing = false
    }
}