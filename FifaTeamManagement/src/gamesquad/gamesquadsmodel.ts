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
            this.gamesSquads = observable.array(values.gamessquads.map((teamSheet: any) => {
                return new GameSquadViewModel(teamSheet)
            }))
        }
    }

    saveData() {
        setGamesSquads({
            targetTeam: 'uc',
            gamessquads: this.gamesSquads.map(sheet => {
                return {
                    date: sheet.date,
                    opponent: sheet.opponent,
                    playersList: sheet.playersList
                }
            })
        }).then(res => {
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
    playersList: GameSquadPlayer[]
    open: boolean
    edit: boolean

    constructor(formation: GameSquad) {
        makeAutoObservable(this)
        this.id = uuidv4()
        this.opponent = formation.opponent
        this.date = formation.date
        this.playersList = formation.playersList;
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

    sortByStatus = (player1: GameSquadPlayer, player2: GameSquadPlayer) => {
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

