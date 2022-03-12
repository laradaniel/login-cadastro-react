import React from 'react';
import './cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro(){
    return (
        <> 
        <div className='containerCadastro'>
           
            <div className='flexInputCadastro'>
                <h2>Cadastre-se</h2>

                <div className='cadastroInput'>
                    <div>
                        <h4 className='tituloCadastro'>Nome</h4>
                        <input className='inputCadastro' type="text"  />
                    </div>
                    <div>
                       <h4 className='tituloCadastro'>Email</h4>
                       <input className='inputCadastro' type="text"  />
                   </div>
                    <div>
                        <h4 className='tituloCadastro'>Senha</h4>
                        <input className='inputCadastro' type="password" />
                    </div>
                    <div>
                        <h4 className='tituloCadastro'>Confirmar Senha</h4>
                        <input className='inputCadastro' type="password" />
                    </div>
                </div>  

                <button type='submit'>
                    Cadastrar
                </button>

                <div className='login'>
                    <h5>Já tem uma conta?</h5>
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
            </div>
            <div className='flexLogoCadastro'>
            </div>
        </div>

        </>
    )
}

export default Cadastro;