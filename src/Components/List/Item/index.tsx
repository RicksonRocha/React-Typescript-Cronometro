import style from '../List.module.scss'

//Interface
import { ITarefa } from '../../../Types/Tarefa'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({description, time, selecionado, completo, id, selecionaTarefa}: Props){
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
            onClick={() => selecionaTarefa({ description, time, selecionado, completo, id })}
        >
            <h3>{description}</h3>
            <span>{time}</span>
        </li>
    )
}