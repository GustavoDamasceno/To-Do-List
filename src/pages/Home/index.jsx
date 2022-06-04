import React, { useState } from 'react'
import './styles.css'
import Card from '../../components/Card/'

function App() {
  const [atividadename, setAtividadename] = useState('generic');
  const [atividades, setAtividades] = useState([]);

  function handleAddAtividades() {
    const newAtividade = {
      ativi: atividadename,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setAtividades(prevState => [...prevState, newAtividade]);
  }

  return (
    <div className="container">
      <h1>Lista de atividades</h1>
      <input type="text" placeholder="Digite aqui..." onChange={e => setAtividadename(e.target.value)} />
      <button type="button" onClick={handleAddAtividades}>Adicionar</button>
      
      {
        atividades.map(atividades => <Card ativi={atividades.ativi} time={atividades.time} />)
      }
    </div>
  )
}

export default App
