import React, {ChangeEvent} from "react";

type InputPropsType = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}

export function Input(props: InputPropsType) {
    return (
        <input type={"number"} value={props.value} onChange={props.onChange} className={ props.error === "Incorrect value!" ? "input-settings-error" : "input-settings"}/>
    )
}