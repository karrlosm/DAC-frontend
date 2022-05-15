import React from "react";
import {useNavigate} from 'react-router-dom';

import {ButtonAction} from '../../components';
import {Main} from './styles';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <Main>
            <h1>owner and products</h1>
            <nav>
                <ButtonAction onClick={() => navigate('/add')} text='adicionar dados'/>
                <ButtonAction onClick={() => navigate('/delete')} text='excluir dados'/>
            </nav>
        </Main>
    )
}