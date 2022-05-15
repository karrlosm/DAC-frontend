import React,{useState} from "react";

import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Owner = () => {

    return (
        <Main>
            <h1>Excluir Propietário(a)</h1>
            <InputContent>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="Informe o CPF para excluir" id="cpf"></InputArea>
            </InputContent>

            <ButtonAction text='excluir'/>
        </ Main>
    );
}