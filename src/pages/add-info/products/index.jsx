import React, {useState} from "react";

import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Product = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeQuantity(e) {
        setQuantity(e.target.value);
    }

    function handleCreateButton() {
        alert("FOI GUARDADO " + quantity + " " + name)
    }

    return (
        <Main>
            <h1>Produto</h1>
            <InputContent onChange={(e) => handleChangeName(e)}>
                <label htmlFor="name">Nome:</label>
                <InputArea  placeholder="Nome do produto" id="name"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeQuantity(e)}>
                <label htmlFor="quantity">Quantidade:</label>
                <InputArea placeholder="Informe a quantia" id="quantity" type='number'></InputArea>
            </InputContent>

            <InputContent>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="CPF do proprietário" id="cpf"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleCreateButton()} />
        </ Main>
    );
}