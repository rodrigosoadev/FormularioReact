import React from 'react'

function Formulario({btnCadastrar, setNome, setIdade,setCidade, cadastrar, alterar, remover, cancelar, nome, idade, cidade}) {
  return (
    <div>
      <form>
        <input type="text" 
        value={nome}
        placeholder='Nome' 
        className='form-control'
        onChange={e => setNome(e.target.value)}/>

        <input type="text" 
        value={idade}
        placeholder='Idade' 
        className='form-control' 
        onChange={e => setIdade(e.target.value)}/>

        <input type="text" 
        value={cidade}
        placeholder='Cidade' 
        className='form-control' 
        onChange={e => setCidade(e.target.value)}/>

        {
          btnCadastrar
          ?
          <input type="button" value='Cadastrar' className='btn btn-primary' onClick={cadastrar} />
          :
          <div>
            <input type="button" value='Alterar' className='btn btn-secondary' onClick={alterar}/>
            <input type="button" value='Excluir' className='btn btn-danger' onClick={remover} />
            <input type="button" value='Cancelar' onClick={cancelar} className='btn btn-success'/>
          </div>
        }
      </form>
    </div>
  );
}

export default Formulario
