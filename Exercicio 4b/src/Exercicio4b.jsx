import React from 'react'
import { connect } from 'react-redux'; 
import './style.css'
import Pergunta from './components/Pergunta';
import Formulario from './components/Formulario';
import Bemvindo from './components/Bemvindo';
import { confirmEmail, notEmail, exit} from './redux/actions';

function Exercicio4b({emailConfirmed, confirmEmail, notEmail }) {
  return (
    <>
      <nav><img src="https://sonne.global/wp-content/uploads/2022/06/sonne.png" alt=""/></nav>
      <h2>Exercicio 4a</h2> 
      <section className="instruções">
            <p>Crie um componente React que utilize o estado global do Redux para exibir informações de um usuário.</p>
      </section>
      <main>
        {/* O emailConfirmed começa nulo e mostra o componente Pergunta, e caso mude mostrará os outros componentes*/} 
            {emailConfirmed === null ? (
                <Pergunta confirmEmail={confirmEmail} notEmail={notEmail} />
            ) : emailConfirmed ? (
                <Bemvindo exit={exit}/>
            ) : (
                <Formulario />
            )}
      </main>
    </>
  )
}
const mapStateToProps = (state) => ({
  emailConfirmed: state.emailConfirmed
});
const mapDispatchToProps = {
  confirmEmail,
  notEmail,
  exit,
};
export default connect(mapStateToProps, mapDispatchToProps)(Exercicio4b);
