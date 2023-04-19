import React from 'react'
import { connect } from 'react-redux'; 

function Pergunta({ user, confirmEmail, notEmail }) {
    return (
        <>  
            {/* O componente Pergunta irá passar no props com a ação do click se é o email correto ou não */}
            <h2>Este é o seu email?</h2>
            <h3>{user.email}</h3>
            <div className="pergunta">
                <button onClick={confirmEmail}>Sim</button>
                <button onClick={notEmail}>Não</button>
            </div>
        </>
  )
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(Pergunta);

