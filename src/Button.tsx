import React from "react";

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled: boolean

}

export function Button(props: ButtonPropsType ) {


    return (
        <button disabled={props.disabled}
                onClick={props.callBack}>{props.title}
        </button>
    )

}