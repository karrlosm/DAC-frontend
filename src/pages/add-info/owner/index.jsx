import React,{useState} from "react";

import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Owner = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState();

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeAge(e) {
        setAge(e.target.value);
    }

    function handleCreateButton() {
        alert(name + " DE IDADE " + age + " FOI ADICIONADO(A) AO BANCO DE DADOS")
    }


    return (
        <Main>
            <h1>Propietário(a)</h1>
            <InputContent>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="CPF" id="cpf"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeName(e)}>
                <label htmlFor="name">Nome:</label>
                <InputArea placeholder="Nome" id="name"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeAge(e)}>
                <label htmlFor="age">Idade:</label>
                <InputArea
                 placeholder="Idade" id="age" type="number"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleCreateButton()} text='criar'/>
        </ Main>
    );
}