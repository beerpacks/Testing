import { faArrowDown, faArrowUp, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observable } from 'mobx'
import { observer } from 'mobx-react';
import * as React from 'react'
import { Button } from "../component/button";
import { GamesSquadsModel, GameSquadViewModel } from './gamesquadsmodel'

@observer
export class GameSquadsView extends React.Component<any, any> {

    @observable model: GamesSquadsModel;

    constructor(props: any) {
        super(props)
        this.model = new GamesSquadsModel();
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                {
                    this.model.isSaveVisible && (
                        <div style={{ marginBottom: 10 }}>
                            <Button text="Save" onClick={() => { this.model.saveData() }} />
                        </div>
                    )
                }

                {
                    this.model.gamesSquads.map(teamsheet => {
                        return (<TeamSheet key={teamsheet.id} model={teamsheet} />)
                    })
                }
            </div>
        )
    }
}

const TeamSheet = observer(({ model }: { model: GameSquadViewModel }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
            <div style={{ display: 'flex', padding: 10, background: 'lightblue' }} onClick={() => { model.setOpen() }}>
                <div onClick={(e) => { model.setEdit(); e.stopPropagation(); }}><FontAwesomeIcon icon={faEdit} /></div>
                {
                    model.isEditting ? (
                        <input type="date" value={model.date} onChange={(inputer) => {
                            model.date = inputer.target.value
                        }} />
                    ) : (
                            <span style={{ marginLeft: 10 }}>Date : {model.date} </span>
                        )
                }
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    {
                        model.isEditting ? (
                            <input type="text" value={model.opponent} onChange={(inputer) => {
                                model.opponent = inputer.target.value
                            }} />
                        ) : (
                                <span style={{ marginLeft: 10 }}>Opponent: {model.opponent}</span>
                            )
                    }
                </div>
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={model.isOpen ? faArrowDown : faArrowUp} />
            </div>
            {
                model.isOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            model.players.map(player => {
                                return (
                                    <div key={player.name} style={{ display: 'flex' }}>
                                        <span style={{ display: 'flex', flexGrow: 1, alignSelf: 'flex-start' }}>{player.name}</span>
                                        {
                                            model.isEditting ? (
                                                <select
                                                    value={player.status}
                                                    onChange={(e) => { player.status = e.currentTarget.value }}>
                                                    <option key="Starter" value="Starter">Starter</option>
                                                    <option key="Removed" value="Removed">Removed</option>
                                                    <option key="Changed" value="Changed">Changed</option>
                                                    <option key="Benched" value="Benched">Benched</option>
                                                    <option key="Not in Squad" value="Not in Squad">Not in Squad</option>
                                                </select>
                                            ) : (
                                                    <span>{player.status}</span>
                                                )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
})