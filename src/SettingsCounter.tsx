import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";


type PropsType = {
    setCount: (value: number) => void
    setMaxCount: (value: number) => void
    disabledSet: boolean
    setDisabledInc: (value: boolean) => void
    setDisabledReset: (value: boolean) => void
    setDisabledSet: (value: boolean) => void
    setStartValue: (value: number) => void
    error: string
    setError: (value: string) => void
    setIsShowCount:(value: boolean) => void

}

export function SettingsCounter(props: PropsType) {
    let [maxValue, setMaxValue] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(0)


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
        props.setIsShowCount(false)
        props.setDisabledReset(true)
        props.setDisabledInc(true)
        if (e.currentTarget.valueAsNumber <= 0 || minValue === e.currentTarget.valueAsNumber || e.currentTarget.valueAsNumber < minValue || minValue < 0) {
            props.setDisabledSet(true)
            props.setError("Incorrect value!")
        } else {
            props.setDisabledSet(false)
            props.setError('Enter set')
        }
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
        props.setIsShowCount(false)
        props.setDisabledReset(true)
        props.setDisabledInc(true)
        if (e.currentTarget.valueAsNumber < 0 || minValue === e.currentTarget.valueAsNumber || e.currentTarget.valueAsNumber >= maxValue) {
            props.setDisabledSet(true)
            props.setError("Incorrect value!")
        } else {
            props.setDisabledSet(false)
            props.setError("Enter set")
        }
    }
    const onClickHandler = () => {
        props.setCount(minValue)             //Задается стартовое минимальное значение
        props.setMaxCount(maxValue)          //Задается максимальное значение
        props.setDisabledInc(false)    //Разблокируется кнопка инкрремент
        //props.setDisabledReset(false)      //Разблокируется кнопка сброса
        props.setDisabledSet(true)     //Блокируется кнопка сэт
        props.setStartValue(minValue)       //При нажатии на кнопку сброса устанавливается это значение
        //props.setDisabledReset(true)  //Блокируется кнопка сброса , до первого нажатия кнопки инкремента
        props.setIsShowCount(true)    //Показывает на дисплее текущее числовое значение
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div><span>Settings</span></div>
                <div className={'container-input'}>
                    <div className="input">
                        max value: <Input value={maxValue} onChange={onChangeMaxValueHandler} error={props.error}/>
                        start value: <Input value={minValue} onChange={onChangeStartValueHandler} error={props.error}/>
                        <Button title={"set"} callBack={onClickHandler} disabled={props.disabledSet}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

