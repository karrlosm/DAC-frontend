import React, {useState} from "react";

import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Product = () => {

    return (
        <Main>
            <h1>Excluir Produto</h1>
            <InputContent>
                <label htmlFor="name">Nome:</label>
                <InputArea  placeholder="Nome do produto" id="name"></InputArea>
            </InputContent>

            <InputContent>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="CPF do proprietário" id="cpf"></InputArea>
            </InputContent>

            <ButtonAction text='excluir'/>
        </ Main>
    );
}