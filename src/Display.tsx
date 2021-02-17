import React from "react";

type DisplayPropsType = {
    count: number
    maxCount: number
    error: string
    isShowCount: boolean
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={"counter"}>
            {
                props.isShowCount ?
                    <span className={props.count === props.maxCount ? "spn-error" : "spn"}>{props.count}</span>
                    : <span className={props.error === "Incorrect value!" ? "spn-error" : "spn"}>{props.error}</span>
            }
        </div>
    )
}