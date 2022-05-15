import React from "react";

import {Main} from './styles';

export const ButtonAction = (props) => {
    return (
        <Main onClick={props.onClick}>
            <button>
                {props.text}
            </button>
        </ Main>
    )
}