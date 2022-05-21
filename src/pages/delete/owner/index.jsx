import React,{useState} from "react";
import axios from "axios";
import {InputArea, ButtonAction} from '../../../components';
import {Main, InputContent} from './styles';

export const Owner = () => {
    const [cpf, setCpf] = useState('');

    function handleChangeCpf(e) {
        setCpf(e.target.value);
    }

    const deleteOwner = async () => {
        await axios.delete(`http://localhost:8080/api/owner/${cpf}`
        ).then(response => {
            alert('EXCLUÍDO COM SUCESSO!');
            }
        ).catch(err => {
            alert('NÃO FOI POSSÍVEL EXCLUIR')
        });
    }

    function handleDeleteButton() {
        deleteOwner();
    }

    return (
        <Main>
            <h1>Excluir Propietário(a)</h1>
            <InputContent onChange={(e) => handleChangeCpf(e)}>
                <label htmlFor="cpf">CPF:</label>
                <InputArea placeholder="Informe o CPF para excluir" id="cpf"></InputArea>
            </InputContent>

            <ButtonAction onClick={() => handleDeleteButton()} text='excluir'/>
        </ Main>
    );
}