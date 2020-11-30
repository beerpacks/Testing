import { action, computed, makeAutoObservable, observable } from "mobx"
import { addNewGames, getLastTenGamesStats } from "../store/gamesquadapi"
import { uuidv4 } from "../util/servercall"

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
        let values = await getLastTenGamesStats({ targetTeam: 'uc' });
        if (values.success) {
            this.playerList = observable.array(values.players.map((player: any) => {
                return new Player(player.name, player.presence, player.contractType)
            }))
        }
    }

    @action
    saveGame() {
        addNewGames({
            targetTeam: 'uc',
            gameSquad: {
                date: this.gameDate,
                opponent: this.opponent,
                playersList: this.playerList.map(player => {
                    return {
                        afterGameNote: player.afterGameNote,
                        name: player.name,
                        status: player.status
                    }
                })
            }
        }
        ).then(res => {
            if (res.success)
                this.loadLastTenGame()
        })
    }

    sorting = (player1: Player, player2: Player) => {
        if ((player1.contractType === "Crucial" && (player2.contractType === "Important" || player2.contractType === "SquadRotation" || player2.contractType === "Sporadic" || player2.contractType === "Future")) ||
            (player1.contractType === "Important" && (player2.contractType === "SquadRotation" || player2.contractType === "Sporadic" || player2.contractType === "Future")) ||
            (player1.contractType === "SquadRotation" && (player2.contractType === "Sporadic" || player2.contractType === "Future")) ||
            (player1.contractType === "SquadRotation" && player2.contractType === "Future")
        )
            return -1
        if ((player2.contractType === "Crucial" && (player1.contractType === "Important" || player1.contractType === "SquadRotation" || player1.contractType === "Sporadic" || player1.contractType === "Future")) ||
            (player2.contractType === "Important" && (player1.contractType === "SquadRotation" || player1.contractType === "Sporadic" || player1.contractType === "Future")) ||
            (player2.contractType === "SquadRotation" && (player1.contractType === "Sporadic" || player1.contractType === "Future")) ||
            (player2.contractType === "SquadRotation" && player1.contractType === "Future"))
            return 1
        else
            return player1.lastTenGame > player2.lastTenGame ? -1 : 1
    }

    @computed get squad() {
        return this.playerList.slice().sort(this.sorting)
    }

    @computed get crucials() {
        return this.squad.filter(player => player.contractType === "Crucial")
    }
    @computed get importants() {
        return this.squad.filter(player => player.contractType === "Important")
    }
    @computed get futures() {
        return this.squad.filter(player => player.contractType === "Future")
    }

    @computed get sporadics() {
        return this.squad.filter(player => player.contractType === "Sporadic")
    }

    @computed get squadRotations() {
        return this.squad.filter(player => player.contractType === "SquadRotation")
    }

    @computed get getStarters() {
        return this.squad.filter(player => player.status === "Starter")
    }

    @computed get getBenches() {
        return this.squad.filter(player => player.status === "Benched")
    }
}

export class Player {
    id: string
    name: string
    lastTenGame: number
    status: string
    afterGameNote: string
    contractType: string
    constructor(name: string, lastTenGame: number, contractType: string) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.name = name;
        this.lastTenGame = lastTenGame
        this.status = "Not in Squad"
        this.afterGameNote = "";
        this.contractType = contractType
    }

    @computed get mustPlay() {
        if (this.contractType === "Crucial" && this.lastTenGame < 9)
            return true
        if (this.contractType === "Important" && this.lastTenGame < 7)
            return true
        if (this.contractType === "SquadRotation" && this.lastTenGame < 5)
            return true;
        if (this.contractType === "Sporadic" && this.lastTenGame < 3)
            return true;
        if (this.contractType === "Future" && this.lastTenGame < 1)
            return true;
        return false
    }
}