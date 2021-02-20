import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SettingsCounter} from "./SettingsCounter";


function App() {

    let [count, setCount] = useState<number>(0)                            //Это значение которое выводится на дисплей
    let [maxCount, setMaxCount] = useState<number>(0)
    let [disabledInc, setDisabledInc] = useState<boolean>(true)
    let [disabledReset, setDisabledReset] = useState<boolean>(true)
    let [disabledSet, setDisabledSet] = useState<boolean>(true)
    let [startValue, setStartValue] = useState<number>(count)
    let [error, setError] = useState<string>('Enter set')
    let [isShowCount, setIsShowCount] = useState<boolean>(false)


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
        <div className={"cont"}>
            <SettingsCounter
                count={count}
                maxCount={maxCount}
                setCount={setCount}
                setMaxCount={setMaxCount}
                disabledSet={disabledSet}
                setDisabledInc={setDisabledInc}
                setDisabledReset={setDisabledReset}
                setDisabledSet={setDisabledSet}
                setStartValue={setStartValue}
                error={error}
                setError={setError}
                setIsShowCount={setIsShowCount}
            />
            <Counter startValue={startValue}
                     disabledInc={disabledInc}
                     disabledReset={disabledReset}
                     maxCount={maxCount}
                     incCount={incCount}
                     resetCount={resetCount}
                     error={error}
                     isShowCount={isShowCount}

            />
        </div>

    )
}


export default App;
