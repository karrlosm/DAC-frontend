import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {InputArea, ButtonAction} from '../../components'
import {Main, InputContent} from './styles';

export const Auth = () => {
    const navigate = useNavigate();
    const [emailUser, setEmailUser] = useState();
    const [passUser, setPassUser] = useState();

    function handleEmail(e) {
        setEmailUser(e.target.value);
    }

    function handlePass(e) {
        setPassUser(e.target.value);
    }

    function handleUserValidate(){
        if (emailUser === 'monteiro@ifpb.edu.br'
        && passUser === '123') {
            return navigate('/');
        } else {
            return alert('Owner não encontrado. Revise os dados inseridos.')
        }
    }

    return (
        <Main>
            <h1>owner and products</h1>
            <h2>autenticação</h2>
            <InputContent onChange={(e) => handleEmail(e)}>
                <label htmlFor="email">E-mai:</label>
                <InputArea type='email' placeholder="Insira o e-mail" id="cpf"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handlePass(e)}>
                <label htmlFor="password">Senha:</label>
                <InputArea placeholder="Insira a senha" id="password" type='password'></InputArea>
            </InputContent>
            <div>
                <ButtonAction text='fazer login' onClick={() => handleUserValidate()}/>
            </div>

        </Main>
    )
}