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
        let values = await getSquad({
            targetTeam: 'uc'
        });
        if (values.success) {
            this.playerList = observable.array(values.squads.map(player => {
                return new Player(player.name, player.contractType, player.uuid, player.age, player.country, player.overall, player.position, player.potentiel)
            }))
        }
    }

    @action
    saveSquad() {
        setSquad({
            targetTeam: 'uc',
            squads: this.playerList.map(player => {
                return {
                    uuid: player.id,
                    age: player.age,
                    country: player.country,
                    overall: player.overall,
                    position: player.position,
                    potentiel: player.potentiel,
                    contractType: player.contractType,
                    name: player.name,
                    wages: player.wage,
                    value: player.value
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
    age: number
    country: string
    overall: number
    position: string
    potentiel: number
    isEdditing: boolean
    wage: number
    value: number
    constructor(name: string, contract?: string, id?: string, age?: number, country?: string, overall?: number, position?: string, potentiel?: number, wage?: number, value?: number) {
        makeAutoObservable(this)
        this.id = id && id?.length > 0 ? id : uuidv4()
        this.name = name;
        this.age = age ? age : 0
        this.country = country && country.length > 0 ? country : ""
        this.overall = overall ? overall : 0
        this.position = position && position.length > 0 ? position : ""
        this.potentiel = potentiel ? potentiel : 0
        this.contractType = contract ? contract : "Future"
        this.isEdditing = false
        this.wage = wage ? wage : 0
        this.value = value ? value : 0
    }
}