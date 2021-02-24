import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import {Display} from "./Display";


type PropsType = {
    count: number
    maxCount: number
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
    disabledSet: boolean
    disabledBack: boolean
    setDisabledInc: (value: boolean) => void
    setDisabledReset: (value: boolean) => void
    setDisabledSet: (value: boolean) => void
    setStartValue: (value: number) => void
    error: string
    setError: (value: string) => void
    setIsShowCount: (value: boolean) => void
    setShowSettings: (value: boolean) => void
    setDisabledBack:(value: boolean) => void
}

export function SettingsCounter(props: PropsType) {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxCount(e.currentTarget.valueAsNumber)
        props.setDisabledBack(true)
        //props.setIsShowCount(false)
        //props.setDisabledInc(true)
        if (e.currentTarget.valueAsNumber <= 0 || e.currentTarget.valueAsNumber <= props.count || props.count < 0) {
            props.setDisabledSet(true)
            props.setError("Incorrect value!")
        } else {
            props.setDisabledSet(false)
            props.setError('Enter set')
        }
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setCount(e.currentTarget.valueAsNumber)
        props.setDisabledBack(true)
        //props.setIsShowCount(false)
        //props.setDisabledInc(true)
        if (e.currentTarget.valueAsNumber < 0 || props.count === e.currentTarget.valueAsNumber || e.currentTarget.valueAsNumber >= props.maxCount) {
            props.setDisabledSet(true)
            props.setError("Incorrect value!")
        } else {
            props.setDisabledSet(false)
            props.setError("Enter set")
        }
    }
    const onClickHandler = () => {
        props.setDisabledInc(false)    //Разблокируется кнопка инкрремент
        props.setDisabledSet(true)     //Блокируется кнопка сэт
        props.setStartValue(props.count)     //При нажатии на кнопку сброса устанавливается это значение
        props.setIsShowCount(true)     //Показывает на дисплее текущее числовое значение
        props.setShowSettings(false)
        props.setDisabledBack(false)
        localStorage.setItem('minValue', JSON.stringify(props.count))
        localStorage.setItem('maxValue', JSON.stringify(props.maxCount))
    }

    const goBack = () => {
        props.setShowSettings(false)

    }

    return (
        <div className="container">
            <div className="wrapper">
                <div><span>Settings</span></div>
                <Display
                         maxCount={props.maxCount}
                         error={props.error}
                        />
                <div className={'container-input'}>
                    <div className="input">
                        max value: <Input value={props.maxCount} onChange={onChangeMaxValueHandler}
                                          error={props.error}/>
                        start value: <Input value={props.count} onChange={onChangeStartValueHandler}
                                            error={props.error}/>
                        <div className={"buttons-settings"}>
                            <Button title={"set"} callBack={onClickHandler} disabled={props.disabledSet}/>
                            <Button title={"back"} callBack={goBack} disabled={props.disabledBack}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

