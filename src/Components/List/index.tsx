import style from './List.module.scss'
//Components
import Item from "./Item";
//Interfaces
import { ITarefa } from '../../Types/Tarefa'

interface Props {
    tasks: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const List = ({tasks, selecionaTarefa }: Props) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map(task => (
                   <Item {...task} key={task.id} selecionaTarefa={selecionaTarefa} /> 
                ))}                
            </ul>
        </aside>
    )
}

export default List