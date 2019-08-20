import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react"
import { TestModel } from "./testmodel";

export interface Props {

}

export interface State {

}

@observer
export class TestComponents extends React.Component<Props, State> {

    @observable tesing: TestModel = new TestModel();

    constructor(val: Props) {
        super(val);
    }

    render() {
        if (!this.tesing)
            return (<div />);
        return (
            <div>
                my name is : {this.tesing.name} <button onClick={() => { this.tesing.onSetName() }} value="refresh" />
                <div>
                    players
                    {
                        this.tesing.playersNames.map(pla => {
                            return (
                                <div>
                                    {pla}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}