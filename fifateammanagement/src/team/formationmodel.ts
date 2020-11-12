import { action, makeAutoObservable, observable } from "mobx"
import { addNewGames, getLastTenGamesStats } from "../store/formationapi"
import { uuidv4 } from "../util/servercall"

const PLAYERS_LIST: string[] = [
    "Vargas",
    "Driussi",
    "Rashica",
    "Odegaard",
    "Galdames",
    "Medel",
    "Willems",
    "Cumar",
    "De Ligt",
    "Aurier",
    "Onana",
    "Pulgar",
    "Aranguiz",
    "Vietto",
    "Martin",
    "Blanco",
    "Vejar",
    "Canillas",
    "Verreth",
    "Devecchi",
    "Verdejo",
    "Schulze"
]

export class FormationsModel {

    opponent: string
    gameDate: string
    playerList: Player[]

    constructor() {
        makeAutoObservable(this)
        this.opponent = "";
        this.gameDate = "";
        this.playerList = observable.array();
        this.loadLastTenGame()
    }

    async loadLastTenGame() {
        let values = await getLastTenGamesStats({
            players: PLAYERS_LIST
        });
        if (values.success) {
            this.playerList = observable.array(values.players.map(player => {
                return new Player(player.name, player.presence)
            }))
        }
    }

    @action
    saveGame() {
        addNewGames({
            currentGame: {
                playersList: this.playerList.map(player => {
                    return {
                        afterGameNote: player.afterGameNote,
                        name: player.name,
                        status: player.status
                    }
                }),
                date: this.gameDate,
                opponent: this.opponent
            }
        }).then(res => {
            if (res.success)
                this.loadLastTenGame()
        })
    }
}

export class Player {
    id: string
    name: string
    lastTenGame: number
    status: string
    afterGameNote: string
    constructor(name: string, lastTenGame: number) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.name = name;
        this.lastTenGame = lastTenGame
        this.status = "Not in Squad"
        this.afterGameNote = "";
    }
}