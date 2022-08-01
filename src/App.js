// Hooks
import { useState } from 'react';

import './App.css';

// Componentes
import Formulario from './form/Formulario';
import Tabela from './Tabela';

function App() {

  // useState
  const [indiceVetor, setIndiceVetor] = useState('')
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função para cadastrar
  const cadastrar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade': cidade};
    setVetor([...vetor, obj]);

    setNome('');
    setIdade('');
    setCidade('');
  }

  // Função para selecionar o usuário
  const selecionar = (indice) => {
    setIndiceVetor(indice);

    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false)
  }

  // Função para alterar os dados
  const alterar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade': cidade};

    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;

    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true)
  }

  // Função para remover
  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);
    setVetor(copiaVetor)

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true)
  }

  // Função para cancelar a edição ou remoção
  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true)
  }

  return (
   <div>
     <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setIdade={setIdade} setCidade={setCidade} cadastrar={cadastrar} alterar={alterar} remover= {remover} cancelar={cancelar} nome={nome} idade={idade} cidade={cidade}/>
     <Tabela vetor={vetor} selecionar={selecionar}/>
   </div>
  );
}

export default App;
