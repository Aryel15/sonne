import React, { useState, useEffect } from 'react'; 
import Axios from 'axios'; 
import './style.css' 

export default function Exercicio2a() {  

const [produtos, setProdutos] = useState([]);  
const [categories, setCategories] = useState([]);
const [filter, setFilter] = useState('Todos');  

useEffect(() => {  
  {/* O Axios busca os produtos e as categorias da API e guarda nos states */}
  Axios.get("https://dummyjson.com/products/")  
  .then((response) => {  
    setProdutos(Object.values(response.data)[0]);  
  })  
  .catch((error) => { console.log(error); }); 
   
  Axios.get("https://dummyjson.com/products/categories")  
  .then((response) => {  
    setCategories(Object.values(response.data));  
  })  
  .catch((error) => { console.log(error); });  

}, []);  


return ( 
  <>  
    <nav><img src="https://sonne.global/wp-content/uploads/2022/06/sonne.png" alt=""/></nav>
    <section>
      <h2>Exercicio 2a</h2> 
      <section className="instruções">
            <p>Crie um componente React que exiba uma lista de itens de uma API e permita que o usuário filtre os itens por um critério específico (por exemplo, categoria ou preço).</p>
      </section>
      <h2>Categorias:</h2>
      <select name="" id="" onChange={(e) => {setFilter(e.target.value); console.log(filter)}}>
        <option value="Todos">Todos</option>
        {/* Mapeia as categorias*/}
        {
          categories.map((category) => <option key={category} value={category}>{category}</option>)
        }
      </select> 
    </section>
    <main> 
      {/* Mapeia os produtos e caso tenham a categoria selecionada no filtro ele será mostrado */}
      {
        produtos.filter((produto) => filter === 'Todos' || produto.category === filter).map((produto) => (
         <div key={produto.id} className='produto'>
          <h3>{produto.title}</h3>
          <h3 className='price'>R$ {produto.price}</h3>
          <p>{produto.category}</p>
         </div> 
         ))
      }  
    </main>
    <footer>Elementos da API <a href="https://dummyjson.com/">Dummyjson</a></footer> 
  </> 
  );  

}   