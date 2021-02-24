import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SettingsCounter} from "./SettingsCounter";


function App() {


    let [count, setCount] = useState<number>(0)                            //Это значение которое выводится на дисплей
    let [maxCount, setMaxCount] = useState<number>(5)
    let [disabledInc, setDisabledInc] = useState<boolean>(false)
    let [disabledReset, setDisabledReset] = useState<boolean>(true)
    let [disabledSet, setDisabledSet] = useState<boolean>(true)
    let [disabledBack, setDisabledBack] = useState<boolean>(false)
    let [startValue, setStartValue] = useState<number>(count)
    let [error, setError] = useState<string>('Enter set')
    let [isShowCount, setIsShowCount] = useState<boolean>(true)
    let [showSettings, setShowSettings] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let saveValue = JSON.parse(valueAsString)
            setCount(saveValue)
            setStartValue(saveValue)
            setIsShowCount(true)
            setDisabledInc(false)
        }
    }, [])


    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let saveValue = JSON.parse(valueAsString)
            setMaxCount(saveValue)
        }
    }, [])


    function incCount() {
        let newCount = startValue + 1
        setStartValue(newCount)
        if (newCount === maxCount) {
            setDisabledInc(true)
        }
        setDisabledReset(false)
    }

    function resetCount() {
        setStartValue(count)
        setDisabledInc(false)
        setDisabledReset(true)
    }


    return (
        <div>
            {
                showSettings ?
                    <SettingsCounter
                        count={count}
                        maxCount={maxCount}
                        setCount={setCount}
                        setMaxCount={setMaxCount}
                        disabledSet={disabledSet}
                        disabledBack={disabledBack}
                        setDisabledInc={setDisabledInc}
                        setDisabledReset={setDisabledReset}
                        setDisabledBack={setDisabledBack}
                        setDisabledSet={setDisabledSet}
                        setStartValue={setStartValue}
                        error={error}
                        setError={setError}
                        setIsShowCount={setIsShowCount}
                        setShowSettings={setShowSettings}
                    />
                   :
                    <Counter startValue={startValue}
                             disabledInc={disabledInc}
                             disabledReset={disabledReset}
                             maxCount={maxCount}
                             incCount={incCount}
                             resetCount={resetCount}
                             error={error}
                             isShowCount={isShowCount}
                             setShowSettings={setShowSettings}
                    />
            }

        </div>

    )
}


export default App;
