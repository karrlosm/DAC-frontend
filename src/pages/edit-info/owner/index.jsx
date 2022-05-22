import React, {useState} from 'react';
import axios from 'axios';
import {InputArea, ButtonAction} from '../../../components';
import {Main, InputContent} from './styles';

export const Owner = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const editData = async () => {
        await axios.put(`http://localhost:8080/api/owner/${id}`,
        {
            name: name,
            age: age,
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

    function handleChangeAge(e) {
        setAge(e.target.value);
    }

    function handleEditButton() {
        editData();
    }

    return (
        <Main>
            <h1>owners</h1>
            <InputContent onChange={(e) => handleChangeId(e)}>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="CPF" id="cpf"></InputArea>
            </InputContent>
            <h2>novos dados:</h2>
            <InputContent onChange={(e) => handleChangeName(e)}>
                <label htmlFor="name">Nome:</label>
                <InputArea placeholder="Nome" id="name"></InputArea>
            </InputContent>

            <InputContent onChange={(e) => handleChangeAge(e)}>
                <label htmlFor="age">Idade:</label>
                <InputArea
                 placeholder="Idade" id="age" type="number"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleEditButton()} text='editar'/>
        </ Main>
    );
}