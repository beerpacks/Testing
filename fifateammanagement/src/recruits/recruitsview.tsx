import { observable } from "mobx"
import * as React from "react"
import { Recruits, RecruitsModel } from "./recruitsmodel"
import { observer } from "mobx-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


@observer
export class RecruitsView extends React.Component {

    @observable model: RecruitsModel = new RecruitsModel()

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th style={{ maxWidth: 60 }}>Min Potential</th>
                        <th style={{ maxWidth: 60 }}>Max Potential</th>
                        <th onClick={() => { this.model.setSortValue("midPotential") }} style={{ maxWidth: 60 }}>Mid Potential</th>
                        <th>Position</th>
                        <th onClick={() => { this.model.setSortValue("atkworkRate") }} style={{ maxWidth: 60 }}>Atk Work Rate</th>
                        <th onClick={() => { this.model.setSortValue("defWorkRate") }} style={{ maxWidth: 60 }}>Def Work Rate</th>
                        <th onClick={() => { this.model.setSortValue("weakfoot") }}>Weak Foot</th>
                        <th onClick={() => { this.model.setSortValue("technique") }}>Technique</th>
                        <th onClick={() => { this.model.setSortValue("fullRating") }}>Full Rating</th>
                    </tr>
                    <tbody>
                        {
                            this.model.recruits.map(recruit => {
                                return (<RecruitsLine key={recruit.id} recruits={recruit} onDeleteRecruit={() => this.model.deleteRecruits(recruit)} comparatorModel={this.model.mainComparatorModel} />)
                            })
                        }
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <Button onClick={() => this.model.addRecruits()} text="Add Recruits" />
                    <Button onClick={() => { this.model.save() }} text="Save" />
                    <Button onClick={() => { this.model.cancel() }} text="Cancel" />
                </div>
            </div >
        )
    }
}

const RecruitsLine = observer(({ recruits, comparatorModel, onDeleteRecruit }: { recruits: Recruits, comparatorModel?: Recruits, onDeleteRecruit: () => void }) => {
    return (
        <tr>
            <td>
                {
                    <input type="checkbox" onClick={() => { recruits.setMainComparator() }} disabled={comparatorModel && recruits !== comparatorModel}></input>
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <input type="text" value={recruits.name} onChange={(inputer) => {
                            recruits.name = inputer.target.value
                        }} />
                    ) : (recruits.name)
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <input type="number" value={recruits.minPotential} onChange={(inputer) => {
                            recruits.minPotential = parseInt(inputer.target.value)
                        }} style={{ maxWidth: 50 }} />
                    ) : (recruits.minPotential)
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <input type="number" value={recruits.maxPotential} onChange={(inputer) => {
                            recruits.maxPotential = parseInt(inputer.target.value)
                        }} style={{ maxWidth: 50 }} />
                    ) : (recruits.maxPotential)
                }
            </td>
            <td>
                <div style={{}}>
                    {recruits.midPotential}
                    {
                        isModelBetter(recruits, "midPotential", comparatorModel) &&
                        (
                            <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: 18, color: 'green' }} />
                        )
                    }
                    {
                        isModelLesser(recruits, "midPotential", comparatorModel) && (
                            <FontAwesomeIcon icon={faArrowAltCircleDown} style={{ fontSize: 18, color: 'red' }} />
                        )
                    }
                    {
                        isModelEqual(recruits, "midPotential", comparatorModel) && (
                            <span>=</span>
                        )
                    }
                </div>
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    LW
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "LW") !== undefined} onChange={() => {
                                        recruits.setPosition("LW")
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    ST
                <input type="checkbox" checked={recruits.positions.find(pos => pos === "ST") !== undefined} onChange={() => {
                                        recruits.setPosition("ST")
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    RW
                <input type="checkbox" checked={recruits.positions.find(pos => pos === "RW") !== undefined} onChange={() => {
                                        recruits.setPosition("RW")
                                    }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                CF
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "CF") !== undefined} onChange={() => {
                                    recruits.setPosition("CF")
                                }} />

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                CAM
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "CAM") !== undefined} onChange={() => {
                                    recruits.setPosition("CAM")
                                }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    LM
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "LM") !== undefined} onChange={() => {
                                        recruits.setPosition("LM")
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    CM
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "CM") !== undefined} onChange={() => {
                                        recruits.setPosition("CM")
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    RM
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "RM") !== undefined} onChange={() => {
                                        recruits.setPosition("RM")
                                    }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                CDM
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "CDM") !== undefined} onChange={() => {
                                    recruits.setPosition("CDM")
                                }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div>
                                    LB
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "LB") !== undefined} onChange={() => {
                                        recruits.setPosition("LB")
                                    }} />
                                </div>
                                <div>
                                    CB
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "CB") !== undefined} onChange={() => {
                                        recruits.setPosition("CB")
                                    }} />
                                </div>
                                <div>
                                    RB
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "RB") !== undefined} onChange={() => {
                                        recruits.setPosition("RB")
                                    }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                GK
                    <input type="checkbox" checked={recruits.positions.find(pos => pos === "GK") !== undefined} onChange={() => {
                                    recruits.setPosition("GK")
                                }} />
                            </div>
                        </div>
                    ) : (recruits.playerPosition)
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <select
                            value={recruits.atkWorkRate}
                            onChange={(e) => { recruits.atkWorkRate = e.currentTarget.value }}>
                            <option key="High" value="High">High</option>
                            <option key="Medium" value="Medium">Medium</option>
                            <option key="Low" value="Low">Low</option>
                        </select>
                    ) : (
                            <div>
                                {
                                    recruits.atkWorkRate
                                }
                                {
                                    isModelBetter(recruits, "atkWorkRate", comparatorModel) &&
                                    (
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: 18, color: 'green' }} />
                                    )
                                }
                                {
                                    isModelLesser(recruits, "atkWorkRate", comparatorModel) && (
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} style={{ fontSize: 18, color: 'red' }} />
                                    )
                                }
                                {
                                    isModelEqual(recruits, "atkWorkRate", comparatorModel) && (
                                        <span>=</span>
                                    )
                                }
                            </div>
                        )
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <select
                            value={recruits.defWorkRate}
                            onChange={(e) => { recruits.defWorkRate = e.currentTarget.value }}>
                            <option key="High" value="High">High</option>
                            <option key="Medium" value="Medium">Medium</option>
                            <option key="Low" value="Low">Low</option>
                        </select>
                    ) : (
                            <div>
                                {
                                    recruits.defWorkRate
                                }
                                {
                                    isModelBetter(recruits, "defWorkRate", comparatorModel) &&
                                    (
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: 18, color: 'green' }} />
                                    )
                                }
                                {
                                    isModelLesser(recruits, "defWorkRate", comparatorModel) && (
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} style={{ fontSize: 18, color: 'red' }} />
                                    )
                                }
                                {
                                    isModelEqual(recruits, "defWorkRate", comparatorModel) && (
                                        <span>=</span>
                                    )
                                }
                            </div>
                        )
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <select
                            value={recruits.weakFoot}
                            onChange={(e) => { recruits.weakFoot = parseInt(e.currentTarget.value) }}>
                            <option key="5" value="5">5</option>
                            <option key="4" value="4">4</option>
                            <option key="3" value="3">3</option>
                            <option key="2" value="2">2</option>
                            <option key="1" value="1">1</option>
                        </select>
                    ) : (
                            <div>
                                {
                                    recruits.weakFoot.toString()
                                }
                                {
                                    isModelBetter(recruits, "weakFoot", comparatorModel) &&
                                    (
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: 18, color: 'green' }} />
                                    )
                                }
                                {
                                    isModelLesser(recruits, "weakFoot", comparatorModel) && (
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} style={{ fontSize: 18, color: 'red' }} />
                                    )
                                }
                                {
                                    isModelEqual(recruits, "weakFoot", comparatorModel) && (
                                        <span>=</span>
                                    )
                                }
                            </div>
                        )
                }
            </td>
            <td>
                {
                    recruits.isEditting ? (
                        <select
                            value={recruits.technique}
                            onChange={(e) => { recruits.technique = parseInt(e.currentTarget.value) }}>
                            <option key="5" value="5">5</option>
                            <option key="4" value="4">4</option>
                            <option key="3" value="3">3</option>
                            <option key="2" value="2">2</option>
                            <option key="1" value="1">1</option>
                        </select>
                    ) : (
                            <div>
                                {
                                    recruits.technique.toString()
                                }
                                {
                                    isModelBetter(recruits, "technique", comparatorModel) &&
                                    (
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ fontSize: 18, color: 'green' }} />
                                    )
                                }
                                {
                                    isModelLesser(recruits, "technique", comparatorModel) && (
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} style={{ fontSize: 18, color: 'red' }} />
                                    )
                                }
                                {
                                    isModelEqual(recruits, "technique", comparatorModel) && (
                                        <span>=</span>
                                    )
                                }
                            </div>
                        )
                }
            </td>
            <td>
                {
                    recruits.fullRating
                }
            </td>
            <td>
                {
                    !comparatorModel && (
                        <div style={{ display: "flex" }}>
                            <FontAwesomeIcon onClick={() => { recruits.setEditting() }} icon={faEdit} style={{ fontSize: 18, cursor: 'pointer', marginRight: 5 }} />
                            <FontAwesomeIcon onClick={onDeleteRecruit} icon={faTrashAlt} style={{ fontSize: 18, cursor: 'pointer' }} />
                        </div>
                    )
                }

            </td>
        </tr>
    )
})

function isModelBetter(model: Recruits, comparatorValueType: string, mainCompare?: Recruits) {
    if (!mainCompare)
        return false
    if (mainCompare === model)
        return false
    if (comparatorValueType === "midPotential") {
        return model.midPotential > mainCompare.midPotential
    }
    if (comparatorValueType === "atkWorkRate") {
        return (model.atkWorkRate === "High" && (mainCompare.atkWorkRate === "Medium" || mainCompare.atkWorkRate === "Low")) ||
            (model.atkWorkRate === "Medium" && mainCompare.atkWorkRate === "Low")
    }
    if (comparatorValueType === "defWorkRate") {
        return (model.defWorkRate === "High" && (mainCompare.defWorkRate === "Medium" || mainCompare.defWorkRate === "Low")) ||
            (model.defWorkRate === "Medium" && mainCompare.defWorkRate === "Low")
    }
    if (comparatorValueType === "weakFoot") {
        return model.weakFoot > mainCompare.weakFoot
    }
    if (comparatorValueType === "technique") {
        return model.technique > mainCompare.technique
    }
}

function isModelLesser(model: Recruits, comparatorValueType: string, mainCompare?: Recruits) {
    if (!mainCompare)
        return false
    if (mainCompare === model)
        return false
    if (comparatorValueType === "midPotential") {
        return model.midPotential < mainCompare.midPotential
    }
    if (comparatorValueType === "atkWorkRate") {
        return (mainCompare.atkWorkRate === "High" && (model.atkWorkRate === "Medium" || model.atkWorkRate === "Low")) ||
            (mainCompare.atkWorkRate === "Medium" && model.atkWorkRate === "Low")
    }
    if (comparatorValueType === "defWorkRate") {
        return (mainCompare.defWorkRate === "High" && (model.defWorkRate === "Medium" || model.defWorkRate === "Low")) ||
            (mainCompare.defWorkRate === "Medium" && model.defWorkRate === "Low")
    }
    if (comparatorValueType === "weakFoot") {
        return model.weakFoot < mainCompare.weakFoot
    }
    if (comparatorValueType === "technique") {
        return model.technique < mainCompare.technique
    }
    return false;
}

function isModelEqual(model: Recruits, comparatorValueType: string, mainCompare?: Recruits) {
    if (!mainCompare)
        return false
    if (mainCompare === model)
        return false
    if (comparatorValueType === "midPotential") {
        return model.midPotential === mainCompare.midPotential
    }
    if (comparatorValueType === "atkWorkRate") {
        return mainCompare.atkWorkRate === model.atkWorkRate

    }
    if (comparatorValueType === "defWorkRate") {
        return mainCompare.defWorkRate === model.defWorkRate
    }
    if (comparatorValueType === "weakFoot") {
        return model.weakFoot === mainCompare.weakFoot
    }
    if (comparatorValueType === "technique") {
        return model.technique === mainCompare.technique
    }
    return false
}

const Button = observer(({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <div style={{ backgroundColor: 'gray', border: 'none', color: 'white', padding: 20, textAlign: 'center', cursor: 'pointer', borderRadius: 12, marginRight: 10 }} onClick={onClick}>
            {text}
        </div>
    )
})