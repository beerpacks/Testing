import { action, computed, makeAutoObservable, observable } from "mobx";
import { GameSquad, GameSquadPlayer } from "../../interfaces/gamesquad";
import { getGamesSquads, setGamesSquads } from "../store/gamesquadapi";
import { uuidv4 } from "../util/servercall";

export class GamesSquadsModel {

    gamesSquads: GameSquadViewModel[]

    constructor() {
        makeAutoObservable(this)
        this.gamesSquads = observable.array();
        this.loadData();
    }

    async loadData() {
        let values = await getGamesSquads({ targetTeam: 'uc' });
        if (values.success) {
            this.gamesSquads = observable.array(values.gamessquads.map((teamSheet) => {
                return new GameSquadViewModel(teamSheet.opponent, teamSheet.date, teamSheet.playersList, teamSheet.ending, teamSheet.isHome, teamSheet.opponentFormation, teamSheet.gameNote, teamSheet.result)
            }))
        }
    }

    saveData() {
        setGamesSquads({
            targetTeam: 'uc',
            gamessquads: this.gamesSquads.map(sheet => {
                return {
                    result: sheet.result,
                    date: sheet.date,
                    opponent: sheet.opponent,
                    playersList: sheet.playersList.map(player => {
                        return {
                            name: player.name,
                            afterGameNote: player.afterGameNote,
                            playerRating: player.rating,
                            status: player.status
                        }
                    }),
                    ending: sheet.ending,
                    isHome: sheet.home,
                    opponentFormation: sheet.formation,
                    gameNote: sheet.note
                }
            })
        })
            .then(res => {
                if (res.success)
                    this.loadData()
            })
    }

    @computed get isSaveVisible() {
        return this.gamesSquads.filter(player => player.isEditting).length > 0
    }
}

export class GameSquadViewModel {

    id: string
    opponent: string
    date: string
    result: string
    playersList: GameSquadPlayerModelView[]
    ending: string
    home: boolean
    formation: string
    note: string
    open: boolean
    edit: boolean

    constructor(opponent: string, date: string, playersList: GameSquadPlayer[], victory?: string, home?: boolean, formation?: string, note?: string, result?: string) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.opponent = opponent
        this.date = date
        this.playersList = playersList.map(player => { return { name: player.name, status: player.status, afterGameNote: player.afterGameNote, rating: player.playerRating } });
        this.home = home ? home : false
        this.formation = formation ? formation : ""
        this.note = note ? note : ""
        this.ending = victory ? victory : "defeat"
        this.result = result ? result : "0-0"
        this.open = false;
        this.edit = false;
    }

    @action
    setOpen() {
        this.open = !this.open
    }

    @action
    setEdit() {
        this.edit = !this.edit
    }

    @computed get isOpen() {
        return this.open
    }

    @computed get isEditting() {
        return this.edit
    }

    @computed get players() {
        return this.playersList.slice().sort(this.sortByStatus)
    }

    sortByStatus = (player1: GameSquadPlayerModelView, player2: GameSquadPlayerModelView) => {
        if (player1.status === 'Starter')
            return -1
        if (player1.status === 'Changed' && (player2.status === 'Removed' || player2.status === 'Benched' || player2.status === "Not in Squad"))
            return -1
        if (player1.status === 'Removed' && (player2.status === 'Benched' || player2.status === "Not in Squad"))
            return -1
        if (player1.status === 'Benched' && player2.status === "Not in Squad")
            return -1
        if (player1.status === player2.status)
            return 0;
        return 1
    }
}

export class GameSquadPlayerModelView {
    name: string
    rating: string
    status: string
    afterGameNote: string
    constructor(name: string, status: string, note: string, rating?: string) {
        makeAutoObservable(this)
        this.name = name;
        this.status = status;
        this.afterGameNote = note
        this.rating = rating ? rating : "n/a"
    }

}

