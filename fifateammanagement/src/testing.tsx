import * as React from "react"
import { Player } from "../interfaces/players"
import { PlayersStore } from "./store/playersstore"

export class TestingView extends React.Component<any, any> {

    constructor(test: any) {
        super(test)
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        let ps: PlayersStore = new PlayersStore()
        ps.getAllPlayer().then((res) => {
            this.setState({
                players: res.map((pl: Player) => { return pl.name })
            })
        })
    }


    render() {


        /*validatePasswordReqAsync().then((voila) => {
            console.debug(JSON.stringify(voila))
        })*/
        return (
            <div>
                {
                    this.state.players.map((pl: string) => {
                        return <div>{pl}</div>
                    })
                }
            </div >
        )
    }
}