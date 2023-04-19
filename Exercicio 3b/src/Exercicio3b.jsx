import React, { useState } from 'react'
import './style.css'
import Axios from 'axios'

export default function Exercicio3b() {
  {/* A função irá guardar os dados do formulário no state cadastro */}
  const [cadastro, setCadastro] = useState({
    name: '',
    email: '',
    senha: ''
  })
  const valorCadastro = e => setCadastro({...cadastro, [e.target.name]: e.target.value})

  const handleClickCadastro = async e =>{
    {/* Usando o Axios será mandada uma requisição do tipo POST para a API da url*/}
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/posts",{
      name: cadastro.name,
      email: cadastro.email,
      senha: cadastro.senha
    }).then((response) => {
      console.log(response);
    }).catch((error) => { console.log(error); });
  }
  return (
    <>
        <nav><img src="https://sonne.global/wp-content/uploads/2022/06/sonne.png" alt=""/></nav>
        <h2>Exercicio 3b</h2> 
        <section className="instruções">
              <p>Crie um componente React de formulário que permita que o usuário insira dados e envie esses dados para uma API.</p>
        </section>
        <main>
            <h1>Cadastre-se</h1>
            <form className='cadastro' onSubmit={handleClickCadastro}>
                <label htmlFor="name">Nome:</label><br />
                <input type="text" name='name' onChange={valorCadastro}/><br />
                <label htmlFor="email">E-mail:</label><br />
                <input type="email" name='email' onChange={valorCadastro}/><br />
                <label htmlFor="senha">Senha:</label><br />
                <input type="password" name='senha' onChange={valorCadastro}/><br />
                <button type='submit'>Cadastrar</button>
            </form>
        </main>
    </>
  
  )
}

