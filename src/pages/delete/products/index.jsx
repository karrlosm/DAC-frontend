import React, {useState} from "react";
import axios from "axios";
import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Product = () => {
    const [cod, setCod] = useState('');

    function handleChangeCod(e) {
        setCod(e.target.value);
    }

    const deleteProduct = async () => {
        await axios.delete(`http://localhost:8080/api/product/${cod}`
        ).then(response => {
            alert('EXCLUÍDO COM SUCESSO!');
            }
        ).catch(err => {
            alert('NÃO FOI POSSÍVEL EXCLUIR')
        });
    }

    function handleDeleteButton() {
        deleteProduct();
    }

    return (
        <Main>
            <h1>Excluir Produto</h1>
            <InputContent onChange={(e) => handleChangeCod(e)}>
                <label htmlFor="cod">Código:</label>
                <InputArea  placeholder="Código do produto" id="cod"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleDeleteButton()} text='excluir'/>
        </ Main>
    );
}