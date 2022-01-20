import React, { useState } from 'react';
import style from './App.module.scss'
import Form from '../Components/Form'
import List from '../Components/List'
import Cronometro from '../Components/Cronometro';

//Interfaces
import { ITarefa } from '../Types/Tarefa';

function App() {
  const [tasks, setTasks] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }
        return tarefa
      }))
    }
  }
   
  return (
    <div className={style.AppStyle} >
      <Form setTasks={setTasks} />
      <List tasks={tasks} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
