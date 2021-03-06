import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react"
import { Button } from "../component/button";
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
                <div style={{ display: 'flex' }}>
                    <select
                        value={this.model.ending}
                        onChange={(e) => { this.model.ending = e.currentTarget.value }}>
                        <option key="victory" value="victory">Victory</option>
                        <option key="defeat" value="defeat">Defeat</option>
                        <option key="tie" value="tie">Tie</option>
                    </select>
                </div>
                <div style={{ display: 'flex' }}>
                    <input type="radio" id="Home" name="where" value="Home" checked={this.model.homeGame} onClick={() => { this.model.homeGame = true }} />
                    <span>Home</span>
                    <input type="radio" id="Away" name="where" value="Away" checked={!this.model.homeGame} onClick={() => { this.model.homeGame = false }} />
                    <span>Away</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Formation:</span>
                    <input type="text" value={this.model.opponentFormation} onChange={(inputer) => {
                        this.model.opponentFormation = inputer.target.value
                    }} />
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Game notes:</span>
                    <input type="text" value={this.model.afterGameNote} onChange={(inputer) => {
                        this.model.afterGameNote = inputer.target.value
                    }} />
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Final Result:</span>
                    <input type="text" value={this.model.result} onChange={(inputer) => {
                        this.model.result = inputer.target.value
                    }} />
                </div>
                <div style={{ display: 'flex', marginTop: 20 }}>
                    Starter : {this.model.getStarters.length}
                </div>

                <div style={{ display: 'flex' }}>
                    Bench : {this.model.getBenches.length}
                </div>


                <div style={{ display: 'flex', flexWrap:'wrap' }}>
                    <ViewByContract text="Crucial" players={this.model.crucials} />
                    <ViewByContract text="Important" players={this.model.importants} />
                    <ViewByContract text="Squad Rotation" players={this.model.squadRotations} />
                </div>
                <div style={{ display: 'flex', flexWrap:'wrap' }}>
                    <ViewByContract text="Sporadic" players={this.model.sporadics} />
                    <ViewByContract text="Future" players={this.model.futures} />
                    <ViewByContract text="Autre" players={this.model.others} />
                </div>


                <div style={{ marginBottom: 10 }}>
                    <Button onClick={() => { this.model.saveGame() }} text="save" />
                </div>
            </div>
        )
    }
}

const ViewByContract = observer(({ players, text }: { players: Player[], text: string }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{text}</span>
            <table>
                <tbody>
                    {
                        players.map(player => {
                            return (<PlayersView key={player.id} player={player} />)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
})

const PlayersView = observer(({ player }: { player: Player }) => {
    return (
        <tr style={player.mustPlay ? { backgroundColor: 'red' } : {}}>
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
            {
                /*
            <td>
                <input type="text" value={player.rating} onChange={(inputer) => {
                    player.rating = inputer.target.value
                }} />
            </td>*/
}
            <td>
                <input type="text" value={player.afterGameNote} onChange={(inputer) => {
                    player.afterGameNote = inputer.target.value
                }} />
            </td>
        </tr>
    )
})