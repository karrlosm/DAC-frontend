import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {ButtonAction} from '../../components'
import {Owner} from './owner';
import {Products} from './products';
import {Main} from './styles';

export const ReadInfo = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('none');
    const [data, setData] = useState();

    function handleChange(e) {
        setType(e.target.value);
    }

    const getData = async () => {
        await axios.get(`http://localhost:8080/api/${type}`)
        .then(response => {
            setData(response.data)
        }).catch(() => {
            alert('NÃO FOI POSSÍVEL CONSULTAR OS DADOS')
        })
    }

    useEffect(() => {
        if (type ==='none') {
            setData(null);
        } else {
            setData([]);
            getData();
        }
    },[type])

    return (
        <Main>
            <h1>
                VER DADOS
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
                    <Owner owners={data}/>
                }
                {type === 'product' && 
                    <Products products={data}/>
                }
                <ButtonAction onClick={() => navigate('/')} text='voltar'/>
            </div>
        </Main>
    )
}