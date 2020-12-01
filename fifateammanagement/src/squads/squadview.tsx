import { faEdit, faSave, faTrashAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
                <span style={{ textAlign: 'left' }}>Chile : {this.model.NbChilePlayers}</span>
                <span style={{ textAlign: 'left' }}>Other : {this.model.NbOtherCountryPlayers}</span>
                <span style={{ textAlign: 'left' }}>Youth : {this.model.NbYouth}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 1320, alignSelf: 'center' }}>
                    {
                        this.model.playerList.map(player => {
                            return (<PlayersCardView key={player.id} player={player} onDeletePlayer={() =>
                                this.model.deletePlayer(player)} />)
                        })
                    }
                </div>
                <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
                    <Button onClick={() => this.model.addSquadPlayer()} text="Add Player" />
                    <Button onClick={() => { this.model.saveSquad() }} text="Save" />
                    <Button onClick={() => { this.model.cancel() }} text="Cancel" />
                </div>
            </div>
        )
    }
}

const PlayersCardView = observer(({ player, onDeletePlayer }: { player: Player, onDeletePlayer: () => void }) => {
    if (player.isEdditing)
        return (
            <div style={{ display: 'flex', padding: 10, width: 200 }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: 'black 1px solid', padding: 5 }}>
                    <div style={{ display: 'flex' }}>
                        <input type="number" style={{ maxWidth: 30 }} value={player.overall} placeholder="Overall" onChange={(inputer) => {
                            player.overall = parseInt(inputer.target.value)
                        }} />
                        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', marginLeft: 5 }}>
                            <FontAwesomeIcon onClick={() => { player.isEdditing = false }} icon={faSave} style={{ fontSize: 18, cursor: 'pointer' }} />
                            <FontAwesomeIcon onClick={() => { player.isEdditing = false }} icon={faWindowClose} style={{ marginLeft: 5, fontSize: 18, cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <input type="text" value={player.position} placeholder="Position" onChange={(inputer) => {
                            player.position = inputer.target.value
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <input type="text" value={player.country} placeholder="Country" onChange={(inputer) => {
                            player.country = inputer.target.value
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <input type="text" value={player.name} placeholder="Name" onChange={(inputer) => {
                            player.name = inputer.target.value
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <input type="number" style={{ maxWidth: 30 }} value={player.potentiel} placeholder="Potentiel" onChange={(inputer) => {
                                player.potentiel = parseInt(inputer.target.value)
                            }} />
                            <span style={{ marginLeft: 5 }}>Pot</span>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <input type="number" style={{ maxWidth: 70 }} value={player.value} placeholder="Value" onChange={(inputer) => {
                                player.value = parseInt(inputer.target.value)
                            }} />
                            <span style={{ marginLeft: 5 }}>Val</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <input type="number" style={{ maxWidth: 30 }} value={player.age} placeholder="Age" onChange={(inputer) => {
                                player.age = parseInt(inputer.target.value)
                            }} />
                            <span style={{ marginLeft: 5 }}>Age</span>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <input type="number" style={{ maxWidth: 70 }} value={player.wage} placeholder="Wages" onChange={(inputer) => {
                                player.wage = parseInt(inputer.target.value)
                            }} />
                            <span style={{ marginLeft: 5 }}>Wag</span>
                        </div>
                    </div>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>
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
                    </span>
                </div>
            </div>
        )
    else
        return (
            <div style={{ display: 'flex', padding: 10, width: 200 }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: 'black 1px solid', padding: 5 }}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ textAlign: 'left' }}>{player.potentiel}</span>
                        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                            <FontAwesomeIcon onClick={() => { player.isEdditing = true }} icon={faEdit} style={{ fontSize: 18, cursor: 'pointer' }} />
                            <FontAwesomeIcon onClick={onDeletePlayer} icon={faTrashAlt} style={{ fontSize: 18, cursor: 'pointer', marginLeft: 5 }} />
                        </div>
                    </div>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>{player.position}</span>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>{player.country}</span>
                    <div style={{ display: 'flex', marginTop: 5, justifyContent: 'center' }}>
                        <span >{player.name}</span>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.potentiel}</span>
                            <span style={{ marginLeft: 5 }}>Pot</span>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.value}</span>
                            <span style={{ marginLeft: 5 }}>Val</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.age}</span>
                            <span style={{ marginLeft: 5 }}>Age</span>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.wage}</span>
                            <span style={{ marginLeft: 5 }}>Wages</span>
                        </div>
                    </div>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>{player.contractType}</span>
                </div>
            </div>
        )
})

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