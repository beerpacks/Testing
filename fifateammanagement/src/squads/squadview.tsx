import { faEdit, faSave, faStar, faTrashAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
                        this.model.players.map(player => {
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
                        <input type="text" style={{ maxWidth: 135 }} value={player.name} placeholder="Name" onChange={(inputer) => {
                            player.name = inputer.target.value
                        }} />
                        <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', marginLeft: 5 }}>
                            <FontAwesomeIcon onClick={() => { player.isEdditing = false }} icon={faSave} style={{ fontSize: 18, cursor: 'pointer' }} />
                            <FontAwesomeIcon onClick={() => { player.isEdditing = false }} icon={faWindowClose} style={{ marginLeft: 5, fontSize: 18, cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                        <span>Age</span>
                        <input type="number" style={{ maxWidth: 30, marginLeft: 5 }} value={player.age} placeholder="Age" onChange={(inputer) => {
                            player.age = parseInt(inputer.target.value)
                        }} />
                    </div>
                    <div style={{ display: 'flex', flexGrow: 1 }}>
                        <span>Orv</span>
                        <input type="number" style={{ maxWidth: 30, marginLeft: 5 }} value={player.overall} placeholder="Overall" onChange={(inputer) => {
                            player.overall = parseInt(inputer.target.value)
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Price</span>
                        <input type="number" style={{ maxWidth: 70, marginLeft: 5 }} value={player.value} placeholder="Value" onChange={(inputer) => {
                            player.value = parseInt(inputer.target.value)
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Wage</span>
                        <input type="number" style={{ maxWidth: 70, marginLeft: 5 }} value={player.wage} placeholder="Wages" onChange={(inputer) => {
                            player.wage = parseInt(inputer.target.value)
                        }} />
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
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Pot</span>
                        <input type="number" style={{ maxWidth: 70, marginLeft: 5 }} value={player.potentiel} placeholder="Potentiel" onChange={(inputer) => {
                            player.potentiel = parseInt(inputer.target.value)
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Pos</span>
                        <input type="text" style={{ maxWidth: 70, marginLeft: 5 }} value={player.positions} placeholder="Position" onChange={(inputer) => {
                            player.setPosition(inputer.target.value)
                        }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Nation</span>
                        <input type="text" style={{ maxWidth: 70, marginLeft: 5 }} value={player.country} placeholder="Country" onChange={(inputer) => {
                            player.country = inputer.target.value
                        }} />
                    </div>
                    <div style={{ textAlign: 'left', marginTop: 5 }}>
                        <span>Atk Work Rate</span>
                        <select
                            value={player.atkWorkRate}
                            onChange={(e) => { player.atkWorkRate = e.currentTarget.value }}>
                            <option key="High" value="High">High</option>
                            <option key="Medium" value="Medium">Medium</option>
                            <option key="Low" value="Low">Low</option>
                        </select>
                    </div>
                    <div style={{ textAlign: 'left', marginTop: 5 }}>
                        <span>Def Work Rate</span>
                        <select
                            value={player.defWorkRate}
                            onChange={(e) => { player.defWorkRate = e.currentTarget.value }}>
                            <option key="High" value="High">High</option>
                            <option key="Medium" value="Medium">Medium</option>
                            <option key="Low" value="Low">Low</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Weak Foot</span>
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.weakFoot = 1 }} style={{ color: "Yellow" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.weakFoot = 2 }} style={{ color: player.weakFoot > 1 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.weakFoot = 3 }} style={{ color: player.weakFoot > 2 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.weakFoot = 4 }} style={{ color: player.weakFoot > 3 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.weakFoot = 5 }} style={{ color: player.weakFoot > 4 ? "Yellow" : "Grey" }} />
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <span>Technique</span>
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.technique = 1 }} style={{ color: "Yellow" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.technique = 2 }} style={{ color: player.technique > 1 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.technique = 3 }} style={{ color: player.technique > 2 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.technique = 4 }} style={{ color: player.technique > 3 ? "Yellow" : "Grey" }} />
                        <FontAwesomeIcon icon={faStar} onClick={() => { player.technique = 5 }} style={{ color: player.technique > 4 ? "Yellow" : "Grey" }} />
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div style={{ display: 'flex', padding: 10, width: 200 }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: 'black 1px solid', padding: 5 }}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ textAlign: 'left' }}>{player.overall}</span>
                        {
                            player.isEditable && (
                                <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                                    <FontAwesomeIcon onClick={() => { player.isEdditing = true }} icon={faEdit} style={{ fontSize: 18, cursor: 'pointer' }} />
                                    <FontAwesomeIcon onClick={onDeletePlayer} icon={faTrashAlt} style={{ fontSize: 18, cursor: 'pointer', marginLeft: 5 }} />
                                </div>
                            )
                        }

                    </div>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>{player.positions}</span>
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
                            <span>{player.valueText}</span>
                            <span style={{ marginLeft: 5 }}>Val</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.age}</span>
                            <span style={{ marginLeft: 5 }}>Age</span>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <span>{player.wagesText}</span>
                            <span style={{ marginLeft: 5 }}>Wages</span>
                        </div>
                    </div>
                    <span style={{ textAlign: 'left', marginTop: 5 }}>{player.contractType}</span>
                    <span>full rating {player.fullRating}</span>
                </div>
            </div>
        )
})