import { observable } from "mobx"
import * as React from "react"
import { Recruits, RecruitsModel } from "./recruitsmodel"
import { observer } from "mobx-react"


@observer
export class RecruitsView extends React.Component {

    @observable model: RecruitsModel = new RecruitsModel()

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                {
                    this.model.getSize
                }

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                        <div>Name</div>
                        <div>Position</div>
                        <div>Min Potential</div>
                        <div>Max Potential</div>
                        <div>Mid Potential</div>
                        <div>Atk Work Rate</div>
                        <div>Def Work Rate</div>
                        <div>Weak Foot</div>
                        <div>Technique</div>
                        <div>Full Rating</div>
                    </div>
                    {
                        this.model.recruitsList.map(recruits => {
                            return (<RecruitsLine key={recruits.id} recruits={recruits} onDeleteRecruit={() => this.model.deleteRecruits(recruits)} />)
                        })
                    }
                </div>
                <div style={{ display: "flex" }}>
                    <button onClick={() => this.model.addRecruits()}>Add Recruits</button>
                    <button onClick={() => { this.model.save() }}>Save</button>
                    <button onClick={() => { this.model.cancel() }}>Cancel</button>
                </div>
            </div >
        )
    }
}

const RecruitsLine = observer(({ recruits, onDeleteRecruit }: { recruits: Recruits, onDeleteRecruit: () => void }) => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <input type="text" value={recruits.name} onChange={(inputer) => {
                    recruits.name = inputer.target.value
                }} />
            </div>
            <div>
                <input type="number" value={recruits.minPotential} onChange={(inputer) => {
                    recruits.minPotential = parseInt(inputer.target.value)
                }} />
            </div>
            <div>
                <input type="number" value={recruits.maxPotential} onChange={(inputer) => {
                    recruits.maxPotential = parseInt(inputer.target.value)
                }} />
            </div>
            <div>
                {recruits.midPotential}
            </div>
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
            <div>
                <select
                    value={recruits.atkWorkRate}
                    onChange={(e) => { recruits.atkWorkRate = e.currentTarget.value }}>
                    <option key="High" value="High">High</option>
                    <option key="Medium" value="Medium">Medium</option>
                    <option key="Low" value="Low">Low</option>
                </select>
            </div>
            <div>
                <select
                    value={recruits.defWorkRate}
                    onChange={(e) => { recruits.defWorkRate = e.currentTarget.value }}>
                    <option key="High" value="High">High</option>
                    <option key="Medium" value="Medium">Medium</option>
                    <option key="Low" value="Low">Low</option>
                </select>
            </div>
            <div>
                <select
                    value={recruits.weakFoot}
                    onChange={(e) => { recruits.weakFoot = parseInt(e.currentTarget.value) }}>
                    <option key="5" value="5">5</option>
                    <option key="4" value="4">4</option>
                    <option key="3" value="3">3</option>
                    <option key="2" value="2">2</option>
                    <option key="1" value="1">1</option>
                </select>
            </div>
            <div>
                <select
                    value={recruits.technique}
                    onChange={(e) => { recruits.technique = parseInt(e.currentTarget.value) }}>
                    <option key="5" value="5">5</option>
                    <option key="4" value="4">4</option>
                    <option key="3" value="3">3</option>
                    <option key="2" value="2">2</option>
                    <option key="1" value="1">1</option>
                </select>
            </div>
            <div>
                <select
                    value={recruits.status}
                    onChange={(e) => { recruits.status = e.currentTarget.value }}>
                    <option key="mainteam" value="mainteam">Main Team</option>
                    <option key="academy" value="academy">Academy</option>
                    <option key="new" value="new">New</option>
                </select>
            </div>
            <div onClick={onDeleteRecruit}>
                delete me
            </div>
        </div>
    )
})