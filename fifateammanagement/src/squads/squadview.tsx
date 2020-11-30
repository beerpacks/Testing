import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react"
import { Button } from "../component/button";
import { Player, SquadModel } from "./squadmodel";

@observer
export class SquadView extends React.Component<any, any>{

    @observable model: SquadModel;

    constructor(props: any) {
        super(props)
        this.model = new SquadModel()
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <table>
                    <thead>
                        <tr>
                            <td>Player Name</td>
                            <td>Overall</td>
                            <td>Potentiel</td>
                            <td>Position</td>
                            <td>Pays</td>
                            <td>Contract Type</td>
                            <td>Age</td>
                            <td>Value</td>
                            <td>Wage</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.model.playerList.map(player => {
                                return (<PlayersView key={player.id} player={player} onDeletePlayer={() =>
                                    this.model.deletePlayer(player)} />)
                            })
                        }
                    </tbody>
                </table>

                <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
                    <Button onClick={() => this.model.addSquadPlayer()} text="Add Player" />
                    <Button onClick={() => { this.model.saveSquad() }} text="Save" />
                    <Button onClick={() => { this.model.cancel() }} text="Cancel" />
                </div>
            </div>
        )
    }
}

const PlayersView = observer(({ player, onDeletePlayer }: { player: Player, onDeletePlayer: () => void }) => {
    return (
        <tr>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="text" value={player.name} onChange={(inputer) => {
                        player.name = inputer.target.value
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="number" value={player.overall} onChange={(inputer) => {
                        player.overall = parseInt(inputer.target.value)
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="number" value={player.potentiel} onChange={(inputer) => {
                        player.potentiel = parseInt(inputer.target.value)
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="text" value={player.position} onChange={(inputer) => {
                        player.position = inputer.target.value
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="text" value={player.country} onChange={(inputer) => {
                        player.country = inputer.target.value
                    }} />
                </div>
            </td>
            <td>
                <select
                    value={player.contractType}
                    onChange={(e) => { player.contractType = e.currentTarget.value }}>
                    <option key="OnLoan" value="onLoan">Loaning FROM Team</option>
                    <option key="Loaned" value="Loaned">Loaning TO Team</option>
                    <option key="Future" value="Future">Future First Team</option>
                    <option key="Sporadic" value="Sporadic">Sporadic First Team</option>
                    <option key="SquadRotation" value="SquadRotation">Squad Rotation</option>
                    <option key="Important" value="Important">Important</option>
                    <option key="Crucial" value="Crucial">Crucial</option>
                </select>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="number" value={player.age} onChange={(inputer) => {
                        player.age = parseInt(inputer.target.value)
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="number" value={player.value} onChange={(inputer) => {
                        player.value = parseInt(inputer.target.value)
                    }} />
                </div>
            </td>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <input type="number" value={player.wage} onChange={(inputer) => {
                        player.wage = parseInt(inputer.target.value)
                    }} />
                </div>
            </td>
            <td>
                <FontAwesomeIcon onClick={onDeletePlayer} icon={faTrashAlt} style={{ fontSize: 18, cursor: 'pointer' }} />
            </td>
        </tr>
    )
})