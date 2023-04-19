import React, { useEffect,useState } from 'react'
import './style.css'
import Axios from 'axios'
import { connect } from 'react-redux'; 
import { selectProduct, buyProduct } from '../redux/actions';

function Exercicio4a({ dispatch, selectedProduct, carrinhoCheio }) {
  {/* Busca os dados da API e guarda no array produtos */}
  const [produtos, setProdutos] = useState([]);  
  useEffect(() => {  
    Axios.get("https://dummyjson.com/products/")  
    .then((response) => {  
      setProdutos(Object.values(response.data)[0]); 
    })  
    .catch((error) => { console.log(error); }); 
  }, []);  

  {/* A função pegará os dados do produto selecionado e colocará no state global*/}
  const handleClickAdd = (product) => {
    dispatch(selectProduct(product));
  };
  {/* A função irá apagar os dados do state global */}
  const handleClickBuy = () => {
    dispatch(buyProduct());
  };

  return (
    <>
      <nav><img src="https://sonne.global/wp-content/uploads/2022/06/sonne.png" alt=""/></nav>
      <h2>Exercicio 4a</h2> 
      <section className="instruções">
            <p>Crie uma ação Redux que altere o estado de um componente React quando o usuário clicar em um botão.</p>
      </section>
      <main> 
        <section className='section-produtos'>
          <h3>Adicione um produto no carrinho</h3>
          <div className="produtos">
            {/* Mapeia os produtos da API e mostra */}
            {
              produtos.map((produto) => (
              <div key={produto.id} className='produto'>
                <h3>{produto.title}</h3>
                <h3 className='price'>R$ {produto.price}</h3>
                <p>{produto.category}</p>
                {/* Botão quando clicado seleciona o produto que será adicionado no stte global */}
                <button onClick={() => handleClickAdd(produto)}>Adicionar</button>
              </div> 
              ))
            }  
          </div>
        </section>
        <section className="section-carrinho">
          <h3>Carrinho</h3>
          <div className="carrinho">
            {/* Mapeia os produtos do carrinho se tiverem*/}
            {carrinhoCheio ? 
            <>
              {selectedProduct.map((product) => (
                <>
                  <h3>{product.title}</h3>
                  <h3 className='price'>R${product.price}</h3>
                  <hr />
                </>
              ))}
              {/* Chama a função que irá apagar os dados do state global */}
              <button onClick={() => handleClickBuy()}>Comprar Tudo</button>
            </> : "" }
          </div>
        </section>
      </main>
      <footer>Elementos da API <a href="https://dummyjson.com/">Dummyjson</a></footer> 
    </>
  )
}
const mapStateToProps = (state) => ({
  selectedProduct: state.product,
  carrinhoCheio: state.carrinhoCheio
});

export default connect(mapStateToProps)(Exercicio4a);

