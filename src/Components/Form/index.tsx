import React from 'react'
import style from './Form.module.scss'
import Button from '../Button'
import {v4 as uuidv4} from 'uuid'

import { ITarefa } from '../../Types/Tarefa'

class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = {
        description: '',
        time: '00:00:00'
    }

    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        this.props.setTasks(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {...this.state, selecionado: false, completo: false, id:uuidv4()} 
            ])
            
        this.setState({
            description: '',
            time: '00:00:00'
        })
    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa" typeof='text'>Add a task</label>
                    <input 
                        type="text" name='tarefa' 
                        onChange={evento => this.setState({...this.state, description: evento.target.value})}
                        value={this.state.description}
                        id='tarefa' placeholder='O que você quer estudar' 
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo" typeof="text">Time</label>
                    <input 
                        type="time" step='1' 
                        onChange={evento => this.setState({...this.state, time: evento.target.value})}
                        value={this.state.time} name='tempo' 
                        id='tempo' min='00:00:00'
                        max='01:30:00' required
                    />
                </div>
                <Button type='submit' texto="Adicionar" />
            </form>
        )
    }
}

export default Form