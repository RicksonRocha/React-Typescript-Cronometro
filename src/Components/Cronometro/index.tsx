import { useEffect, useState } from 'react'
import style from './Cronometro.module.scss'

import Button from "../Button"
import Clock from './Clock'

import { tempoParaSegundos } from '../../commons/utils/time'

//Interface
import { ITarefa } from '../../Types/Tarefa'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {
    const [tempo, setTempo] = useState<number>()
    
    useEffect(() => {
        if (selecionado?.time){
            setTempo(tempoParaSegundos(selecionado.time))
        }        
    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if (contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Esoclha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button texto={'Começar!'} onClick={() => regressiva(tempo)} />
        </div>
    )
}