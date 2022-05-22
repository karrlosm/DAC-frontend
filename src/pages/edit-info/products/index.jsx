import React, {useState} from 'react';
import axios from 'axios';
import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Products = () => {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();

    const editData = async () => {
        await axios.put(`http://localhost:8080/api/product/${id}`,
        {
            name: name,
            quantity: quantity,
        })
        .then(response => {
            alert(`${name} EDITADO COM SUCESSO.`)
        }).catch(() => {
            alert('NÃO FOI POSSÍVEL EDITAR OS DADOS')
        })
    }

    function handleChangeId(e) {
        setId(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeQuantity(e) {
        setQuantity(e.target.value);
    }

    function handleEditButton() {
        editData();
    }

    return (
        <Main>
            <h1>owners</h1>
            <InputContent onChange={(e) => handleChangeId(e)}>
                <label htmlFor="cod">Código:</label>
                <InputArea placeholder="Código do produto" id="cod"></InputArea>
            </InputContent>
            <h2>novos dados:</h2>
            <InputContent onChange={(e) => handleChangeName(e)}>
                <label htmlFor="name">Nome:</label>
                <InputArea placeholder="Nome" id="name"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeQuantity(e)}>
                <label htmlFor="quantity">Quantidade:</label>
                <InputArea
                 placeholder="Quantidade" id="quantity" type="number"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleEditButton()} text='editar'/>
        </ Main>
    );
}