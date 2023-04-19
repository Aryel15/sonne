import './style.css'
import React, { useState, useEffect } from 'react'; 
import Axios from 'axios';

export default function Exercicio3a() {
    const [title, setTitle] = useState("↑")
    const [price, setPrice] = useState("↑")
    const [category, setCategory] = useState("↑")
    const [produtos, setProdutos] = useState([]); 
    const [coluna, setColuna] = useState(null); 
    const [direção, setDireção] = useState('asc'); 
   
    useEffect(() => { 
      Axios.get("https://dummyjson.com/products/")  
      .then((response) => {  
        setProdutos(Object.values(response.data)[0]);  
      })  
      .catch((error) => { console.log(error); });
    }, []); 
    {/*A função ordenaColuna atualiza as variáveis de estado que controlam qual coluna está sendo usada para ordenar os produtos e a direção. A função ordenaProdutos cria uma cópia ordenada do array de produtos com base nas variáveis de estado atualizadas pela função ordenaColuna. */}

    const ordenaColuna = (colunaSelect) => { 
      if (colunaSelect === coluna) { 
        setDireção(direção === 'asc' ? 'desc' : 'asc'); 
      } else { 
        setColuna(colunaSelect); 
        setDireção('asc'); 
      } 
    }; 
   
    const ordenaProdutos = [...produtos].sort((a, b) => { 
      if (coluna) { 
        if (direção === 'asc') { 
          return a[coluna] > b[coluna] ? 1 : -1; 
        } else { 
          return a[coluna] < b[coluna] ? 1 : -1; 
        } 
      } 
      return 0; 
    }); 
    function mudarTitle(){
      if(title === "↑"){
        setTitle("↓"); setPrice("↑"); setCategory("↑")
      }else{
        setTitle("↑"); setPrice("↓"); setCategory("↓")
    }}
    function mudarPrice(){
      if(price === "↑"){
        setPrice("↓"); setTitle("↑"); setCategory("↑")
      }else{
        setPrice("↑"); setTitle("↓"); setCategory("↓")
    }}
    function mudarCategory(){
      if(category === "↑"){
        setCategory("↓"); setTitle("↑"); setPrice("↑")
      }else{
        setCategory("↑"); setTitle("↓"); setPrice("↓")
    }}

    return ( 
      <>
      <nav><img src="https://sonne.global/wp-content/uploads/2022/06/sonne.png" alt=""/></nav>
      <h2>Exercicio 3a</h2> 
      <section className="instruções">
            <p>Crie um componente React de tabela que exiba dados de uma API e permita que o usuário classifique os dados por uma determinada coluna.</p>
      </section>
      <table> 
        <thead> 
          <tr> 
            <th onClick={() => {ordenaColuna('title'), mudarTitle()}}>Nome {title}</th> 
            <th onClick={() => {ordenaColuna('price'), mudarPrice()}}>Preço {price}</th> 
            <th onClick={() => {ordenaColuna('category'), mudarCategory()}}>Categoria {category}</th> 
          </tr> 
        </thead> 
        <tbody> 
          {ordenaProdutos.map((linha) => ( 
            <tr key={linha.id}> 
              <td>{linha.title}</td> 
              <td>{linha.price}</td> 
              <td>{linha.category}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
      <footer>Elementos da API <a href="https://dummyjson.com/">Dummyjson</a></footer> 

    </>
  )
}
