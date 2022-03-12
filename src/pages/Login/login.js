import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login(){
    return (
        <>
            <div className='containerLogin'>
                <div className='flexLogoLogin'>

                </div>
                <div className='flexInputLogin'>
                    <h2>Login</h2>

                    <div className='loginInputLogin'>
                        <div className='inputEmailLogin'>
                           
                            <h4 className='tituloLogin'>Usuário</h4>
                            <input className='inputLogin' type="text"  />
                        </div>
                        <div className='inputPassword'>
                           
                            <h4 className='tituloLogin'>Senha</h4>
                            <input className='inputLogin' type="password" />
                        </div>
                    </div>

                    <button type='submit'>
                        Entrar
                    </button>

                    <div className='cadastro'>
                        <h5>Não tem uma conta?</h5>
                        <Link to='/cadastro'>
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;