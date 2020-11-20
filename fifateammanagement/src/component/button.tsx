import * as React from "react"

import { observer } from "mobx-react"

export const Button = observer(({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <div style={{ backgroundColor: 'gray', border: 'none', color: 'white', padding: 20, textAlign: 'center', cursor: 'pointer', borderRadius: 12, marginRight: 10 }} onClick={onClick}>
            {text}
        </div>
    )
})