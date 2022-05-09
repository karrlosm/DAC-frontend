import React from "react";

import {Link} from "react-router-dom";

import {Main, StyledButton, TextButton} from './styles';

export const ButtonAction = (props) => {
    return (
        <Main onClick={props.onClick}>
            <button>
                Criar
            </button>
        </ Main>
    )
}