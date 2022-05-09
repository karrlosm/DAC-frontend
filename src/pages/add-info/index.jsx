import React, {useState} from "react";

import {Main} from './styles'

import {Product} from './products'
import {Owner} from './owner'

export const AddInfo = () => {
    const [type, setType] = useState('none');

    function handleChange(e) {
        setType(e.target.value); 
        console.log(type);
    }

    return (
        <Main>
            <h1>
                ADICIONAR DADOS
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
                    <Owner />
                }
                {type === 'product' && 
                    <Product />
                }

            </div>
        </Main>
    )
}