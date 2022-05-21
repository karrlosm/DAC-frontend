import React,{useState} from "react";
import axios from "axios";
import {InputArea, ButtonAction} from '../../../components';
import {Main, InputContent} from './styles';

export const Owner = () => {

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();

    const createOwner = async () => {
        await axios.post('http://localhost:8080/api/owner',
            {
                cpf: cpf,
                name: name,
                age: age,
            }
        ).then(response => {
                alert('ADICIONADO COM SUCESSO!');
            }
        ).catch(err => {
            alert(err.response)
        });
    }

    function handleChangeCpf(e) {
        setCpf(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeAge(e) {
        setAge(e.target.value);
    }

    function handleCreateButton() {
        createOwner();
    }


    return (
        <Main>
            <h1>Propietário(a)</h1>
            <InputContent onChange={(e) => handleChangeCpf(e)}>
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