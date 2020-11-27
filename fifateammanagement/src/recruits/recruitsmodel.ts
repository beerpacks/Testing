import { action, computed, makeAutoObservable, observable } from "mobx";
import { getAllPlayers, setAllPlayers } from "../store/playerapi";
import { uuidv4 } from "../util/servercall"

type SortValue = "fullRating" | "technique" | "weakfoot" | "defWorkRate" | "atkworkRate" | "midPotential"

export class RecruitsModel {
    recruitsList: Recruits[];

    sortBy: string = "fullRating"

    searchedPosition: string[] = []

    constructor() {
        makeAutoObservable(this)
        this.recruitsList = []
        this.loadRecruits()
    }

    loadRecruits() {
        getAllPlayers({}).then((serverVal) => {
            if (serverVal.success) {
                this.recruitsList = observable.array(serverVal.allPlayers.map(recruit => {
                    return new Recruits(recruit.name, recruit.positions, recruit.minPotential, recruit.maxPotential, recruit.atkWorkRate, recruit.defWorkRate, recruit.weakFoot, recruit.technique, recruit.status, recruit.overall, recruit.note)
                }))
            }
        });
    }

    sortingByFullRating = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            return recruits1.fullRating > recruits2.fullRating ? -1 : 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    sortingByTechnique = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            return recruits1.technique > recruits2.technique ? -1 : 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    sortingByWeakFoot = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            return recruits1.weakFoot > recruits2.weakFoot ? -1 : 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    sortingByDefWorkRate = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            if (recruits1.defWorkRate === "High" && (recruits2.defWorkRate === "Medium" || recruits2.defWorkRate === "Low"))
                return -1
            if (recruits1.defWorkRate === "Medium" && recruits2.defWorkRate === "Low")
                return -1
            return 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    sortingByAtkWorkRate = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            if (recruits1.atkWorkRate === "High" && (recruits2.atkWorkRate === "Medium" || recruits2.atkWorkRate === "Low"))
                return -1
            if (recruits1.atkWorkRate === "Medium" && recruits2.atkWorkRate === "Low")
                return -1
            return 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    sortingByMidPotential = (recruits1: Recruits, recruits2: Recruits) => {
        if (!recruits1.isMainComparator && !recruits2.isMainComparator) {
            return recruits1.midPotential > recruits2.midPotential ? -1 : 1
        }
        return recruits2.isMainComparator ? 1 : -1
    }

    @computed get mainComparatorModel() {
        return this.filteredRecruits.find(recruit => recruit.isMainComparator)
    }

    @computed get recruits() {
        if (this.sortBy === "midPotential")
            return this.filteredRecruits.slice().sort(this.sortingByMidPotential)
        if (this.sortBy === "atkworkRate")
            return this.filteredRecruits.slice().sort(this.sortingByAtkWorkRate)
        if (this.sortBy === "defWorkRate")
            return this.filteredRecruits.slice().sort(this.sortingByDefWorkRate)
        if (this.sortBy === "weakfoot")
            return this.filteredRecruits.slice().sort(this.sortingByWeakFoot)
        if (this.sortBy === "technique")
            return this.filteredRecruits.slice().sort(this.sortingByTechnique)
        return this.filteredRecruits.slice().sort(this.sortingByFullRating);
    }

    @computed get filteredRecruits() {
        if (this.searchedPosition.length > 0) {
            console.debug("resultat" + this.recruitsList.filter(recruit => this.searchedPosition.every(pos => recruit.positions.includes(pos))))
            return this.recruitsList.filter(recruit => this.searchedPosition.every(pos => recruit.positions.includes(pos)))
        }
        return this.recruitsList;
    }

    @action
    setSearch(newPosition: string) {
        if (this.searchedPosition.find(pos => pos === newPosition) !== undefined) {
            this.searchedPosition = this.searchedPosition.filter(pos => pos !== newPosition);
        } else {
            this.searchedPosition.push(newPosition)
        }
    }

    @action
    clearSearch() {
        this.searchedPosition = []
    }

    @action
    setSortValue(newSort: SortValue) {
        this.sortBy = newSort;
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
                    status: recruit.status,
                    note: recruit.note,
                    overall: recruit.overall
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
    isMainComparator: boolean
    overall: number
    note: string


    constructor(name?: string, positons?: string[], minPotential?: number, maxPotential?: number, atkWorkRate?: string, defWorkRate?: string, weakFoot?: number, technique?: number, status?: string, overall?: number, note?: string) {
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
        this.isMainComparator = false
        this.overall = overall || 0
        this.note = note || ""
    }

    @computed get midPotential() {
        return (this.maxPotential - this.minPotential) / 2 + this.minPotential
    }

    @computed get isPotentialAccurate() {
        return (this.maxPotential - this.minPotential) < 9
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

    @action
    setMainComparator() {
        this.isMainComparator = !this.isMainComparator;
    }

}