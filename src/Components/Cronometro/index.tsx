import style from './Cronometro.module.scss'

import Button from "../Button"
import Clock from './Clock'

import { tempoParaSegundos } from '../../commons/utils/date'

export default function Cronometro() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Esoclha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button texto={'Começar!'} />
        </div>
    )
}