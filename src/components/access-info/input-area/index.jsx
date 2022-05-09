import React from "react";

import {Main} from './styles';

export const InputArea = (props) => {
    return (
        <Main onChange={props.onChange}
         type={props.type} placeholder={props.placeholder} id={props.id} >
        </ Main>
    )
}