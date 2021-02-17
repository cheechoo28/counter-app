import React from "react";
import {Display} from "./Display";
import {Button} from "./Button";


type CounterPropsType = {
    count: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
    disabledInc: boolean
    disabledReset: boolean
    error: string
    isShowCount: boolean

}

export function Counter(props: CounterPropsType) {

    const incCount = () => props.incCount()
    const resetCount = () => props.resetCount()

    return (
        <div className="container">
            <div className="wrapper">
                <Display count={props.count} maxCount={props.maxCount} error={props.error}
                         isShowCount={props.isShowCount}/>
                <div className="buttons">
                    <Button callBack={incCount}
                            title={"INC"}
                            disabled={props.disabledInc}

                    />
                    <Button callBack={resetCount}
                            title={"RESET"}
                            disabled={props.disabledReset}

                    />
                </div>
            </div>
        </div>
    )
}

