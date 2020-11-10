import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react"
import { FormationPlayer } from "../../interfaces/formation";
import { FormationsModel, Player } from "./formationmodel"

@observer
export class FormationView extends React.Component<any, any>{

    @observable model: FormationsModel;

    constructor(props: any) {
        super(props)
        this.model = new FormationsModel()
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    Opponent :
                <input type="text" value={this.model.opponent} onChange={(inputer) => {
                        this.model.opponent = inputer.target.value
                    }} />
                </div>
                <div style={{ display: 'flex' }}>
                    Date :
                    <input type="date" value={this.model.gameDate} onChange={(inputer) => {
                        this.model.gameDate = inputer.target.value
                    }} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Player Name</td>
                            <td>Status</td>
                            <td>Notes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.model.playerList.map(player => {
                                return (<PlayersView key={player.id} player={player} />)
                            })
                        }
                    </tbody>
                </table>

                <div onClick={() => { this.model.saveGame() }}>Save</div>
            </div>
        )
    }
}

const PlayersView = observer(({ player }: { player: Player }) => {
    return (
        <tr>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <div>{player.name}</div>
                    <div style={{ fontSize: 12 }}>Last 10 games presence :{player.lastTenGame}</div>
                </div>
            </td>
            <td>
                <select
                    value={player.status}
                    onChange={(e) => { player.status = e.currentTarget.value }}>
                    <option key="Starter" value="Starter">Starter</option>
                    <option key="Removed" value="Removed">Removed</option>
                    <option key="Changed" value="Changed">Changed</option>
                    <option key="Benched" value="Benched">Benched</option>
                    <option key="Not in Squad" value="Not in Squad">Not in Squad</option>
                </select>
            </td>
            <td>
                <input type="text" value={player.afterGameNote} onChange={(inputer) => {
                    player.afterGameNote = inputer.target.value
                }} />
            </td>
        </tr>
    )
})