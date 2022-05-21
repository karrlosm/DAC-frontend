import React, {useState} from "react";
import axios from "axios";
import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Product = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [cpfOwner, setCpfOwner] = useState('');
    const [codProduct, setCodProduct] = useState('');

    const createProduct = async () => {
        await axios.post('http://localhost:8080/api/product',
            {
                id: codProduct,
                name: name,
                quantity: quantity,
                ownerCpf: cpfOwner,
            }
        ).then(response => {
            alert('ADICIONADO COM SUCESSO!');
            }
        ).catch(err => {
            alert(err.response)
        });
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeQuantity(e) {
        setQuantity(e.target.value);
    }

    function handleChangeCpf(e) {
        setCpfOwner(e.target.value);
    }

    function handleChangeCod(e) {
        setCodProduct(e.target.value);
    }

    function handleCreateButton() {
        createProduct();
    }

    return (
        <Main>
            <h1>Produto</h1>
            <InputContent onChange={(e) => handleChangeCod(e)}>
                <label htmlFor="cod">Código:</label>
                <InputArea  placeholder="Código do produto" id="cod"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeName(e)}>
                <label htmlFor="name">Nome:</label>
                <InputArea  placeholder="Nome do produto" id="name"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeQuantity(e)}>
                <label htmlFor="quantity">Quantidade:</label>
                <InputArea placeholder="Informe a quantia" id="quantity" type='number'></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeCpf(e)}>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="CPF do proprietário" id="cpf"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleCreateButton()} text='criar'/>
        </ Main>
    );
}