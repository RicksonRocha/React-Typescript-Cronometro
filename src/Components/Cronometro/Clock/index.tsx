import React, { Fragment } from "react"
import style from './Clock.module.scss'

export default function Clock() {
    return(
        <Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>            
        </Fragment>
    )
}