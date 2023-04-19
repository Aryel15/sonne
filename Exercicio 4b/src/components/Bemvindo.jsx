import React from 'react'
import { connect } from 'react-redux'; 
import { exit } from '../redux/actions';

function Bemvindo({user, exit}) {
  
  return (
    <>
      {/* Mostra o nome do usuario do state global */}
      <h2>Bem Vindo {user.name}!</h2>
      {/* Caso aperte no botão sair o usuário global volta a ser o inicial e volta a mostrar o componente Pergunta*/}  
      <button className="exit" onClick={exit}>Sair</button>
    </>
  )
}
const mapStateToProps = (state) => ({
    user: state.user
});
const mapDispatchToProps = {
    exit,
};
export default connect(mapStateToProps, mapDispatchToProps)(Bemvindo);

