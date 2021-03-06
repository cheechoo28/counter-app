import React from "react";
import {Display} from "./Display";
import {Button} from "./Button";


type CounterPropsType = {
    startValue: number
    maxCount: number
    incCount: () => void
    resetCount: () => void
    setShowSettings:( value: boolean)=> void
    disabledInc: boolean
    disabledReset: boolean
    error: string
    isShowCount: boolean
}

export function Counter(props: CounterPropsType) {

    const incCount = () => props.incCount()
    const resetCount = () => props.resetCount()
    const showSettings = () => {
        props.setShowSettings(true)
    }

    return (
        <div className="container">
            <div className="wrapper">
                <Display startValue={props.startValue}
                         maxCount={props.maxCount}
                         error={props.error}
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
                    <Button title={'settings'} callBack={showSettings} disabled={false}/>
                </div>
            </div>
        </div>
    )
}

