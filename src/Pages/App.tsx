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
   
  return (
    <div className={style.AppStyle} >
      <Form setTasks={setTasks} />
      <List tasks={tasks} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
