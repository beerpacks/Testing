import { action, computed, makeAutoObservable, observable } from "mobx"
import { getSquad, setSquad } from "../store/squadapi"
import { uuidv4 } from "../util/servercall"

export class SquadModel {

    playerList: Player[]

    constructor() {
        makeAutoObservable(this, {
            playerList: observable,
            NbChilePlayers: computed,
            NbOtherCountryPlayers: computed,
            NbYouth: computed,
            saveSquad: action
        })
        this.playerList = observable.array();
        this.loadSquadPlayer()
    }

    get NbChilePlayers() {
        return this.playerList.filter(player => player.country === "Chile").length
    }

    get NbOtherCountryPlayers() {
        return this.playerList.length - this.NbChilePlayers;
    }

    get NbYouth() {
        return this.playerList.filter(player => player.age < 22).length
    }

    async loadSquadPlayer() {
        let values = await getSquad({
            targetTeam: 'jfuc'
        });
        if (values.success) {
            this.playerList = observable.array(values.squads.map(player => {
                return new Player(player.name, player.contractType, player.uuid, player.age, player.country, player.overall, player.position, player.potentiel, player.wages, player.value)
            }))
        }
    }

    saveSquad() {
        let request = {
            targetTeam: 'jfuc',
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
            }
            )
        }
        console.debug(JSON.stringify(request))
        setSquad(request)
            .then(res => {
                //if (res.success)
                //this.loadSquadPlayer()
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
        let player = new Player("");
        player.isEdditing = true;
        this.playerList.push(player)
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
        makeAutoObservable(this,{
            name:observable,
            contractType:observable,
            age:observable,
            country:observable,
            overall:observable,
            position:observable,
            potentiel:observable,
            isEdditing:observable,
            wage:observable,
            value:observable,
            wagesText:computed,
            valueText:computed
        })
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

    get valueText(){
        if(!(this.value / 1000000).toString().startsWith("0")){
            return ((this.value / 1000000).toFixed(1)) + " M"
        }
        return ((this.value / 1000)) + " K"
    }


    get wagesText(){
        if((this.wage / 1000) > 0){
            return ((this.wage / 1000)) + " K"
        }
        return this.wage
    }
}