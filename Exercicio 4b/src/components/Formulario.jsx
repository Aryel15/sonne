import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

function Formulario({ addUser }) {
    {/* O const irá guardar os dados do formulário */}
    const [cadastro, setCadastro] = useState({
        name: '',
        email: '',
    });
    const valorCadastro = (e) =>
        setCadastro({ ...cadastro, [e.target.name]: e.target.value });

    {/* A função irá guardar os dados do formulário no state global*/}
    const handleClickCadastro = (e) => {
        e.preventDefault();
        addUser(cadastro);
    };

    return (
        <>
            <h1>Cadastre-se</h1>
            <form className="cadastro" onSubmit={handleClickCadastro}>
                <label htmlFor="name">Nome:</label><br />
                <input type="text" name="name" onChange={valorCadastro} /><br />
                <label htmlFor="email">E-mail:</label><br />
                <input type="email" name="email" onChange={valorCadastro} /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

const mapDispatchToProps = {
    addUser,
};

export default connect(null, mapDispatchToProps)(Formulario);