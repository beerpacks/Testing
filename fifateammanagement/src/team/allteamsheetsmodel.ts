import { action, computed, makeAutoObservable, observable } from "mobx";
import { Formation, FormationPlayer } from "../../interfaces/formation";
import { getAllTeamSheet, setAllTeamSheet } from "../store/formationapi";
import { uuidv4 } from "../util/servercall";

export class AllTeamSheetsModel {

    teamsheets: TeamSheetViewModel[]

    constructor() {
        makeAutoObservable(this)
        this.teamsheets = observable.array();
        this.loadData();
    }

    async loadData() {
        let values = await getAllTeamSheet({});
        if (values.success) {
            this.teamsheets = observable.array(values.teamSheets.map(teamSheet => {
                return new TeamSheetViewModel(teamSheet)
            }))
        }
    }

    saveData() {
        setAllTeamSheet({
            teamSheets: this.teamsheets.map(sheet => {
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

    @computed get getTeamSheets() {
        return this.teamsheets
    }

    @computed get isSaveVisible() {
        return this.teamsheets.filter(player => player.isEditting).length > 0
    }
}

export class TeamSheetViewModel implements Formation {

    id: string
    opponent: string
    date: string
    playersList: FormationPlayer[]
    open: boolean
    edit: boolean

    constructor(formation: Formation) {
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

    sortByStatus = (player1: FormationPlayer, player2: FormationPlayer) => {
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

