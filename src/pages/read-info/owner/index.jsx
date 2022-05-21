import React from 'react';
import {Main, OwnerBox, BoxRow} from './styles';

export const Owner = (props) => {

    const owners = props.owners;
    return (
        <Main>
            <h1>owners</h1>
            {owners && owners.map((owner) => (
                <OwnerBox>
                    <BoxRow>
                        <span className='title'>
                            Nome:
                        </span>
                        <span>
                            {owner.name}
                        </span>
                    </BoxRow>
                    <BoxRow>
                        <span className='title'>
                            Idade:
                        </span>
                        <span>
                            {owner.age}
                        </span>
                    </BoxRow>
                </OwnerBox>
            ))}
        </ Main>
    );
}