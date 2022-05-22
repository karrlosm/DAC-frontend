import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {ButtonAction} from '../../components'
import {Owner} from './owner';
import {Products} from './products';
import {Main} from './styles';

export const EditInfo = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('none');

    function handleChange(e) {
        setType(e.target.value);
    }

    return (
        <Main>
            <h1>
                EDITAR DADOS
            </h1>

            <select value={type} id="type-info" onChange={e => handleChange(e)}>
                <option value="none">Selecione o tipo </option>
                <option value="owner">Proprietário(a) </option>
                <option value="product">Produto </option>
            </select>
            <div>
                {type === 'none' && 
                    <h1>nenhum tipo selecionado</h1>
                }
                {type === 'owner' && 
                    <Owner/>
                }
                {type === 'product' && 
                    <Products />
                }
                <ButtonAction onClick={() => navigate('/')} text='voltar'/>
            </div>
        </Main>
    )
}