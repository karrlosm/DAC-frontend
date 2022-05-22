import React from 'react';
import {Main, ProductBox, BoxRow} from './styles';

export const Products = (props) => {

    const products = props.products;
    return (
        <Main>
            <h1>products</h1>
            {products && products.length > 0 ? products.map((product) => (
                <ProductBox>
                    <BoxRow>
                        <span className='title'>
                            Nome:
                        </span>
                        <span>
                            {product.name}
                        </span>
                    </BoxRow>
                    <BoxRow>
                        <span className='title'>
                            Quantidade:
                        </span>
                        <span>
                            {product.quantity}
                        </span>
                    </BoxRow>
                </ProductBox>
            )) : 
            <h1>
                nada para ver
            </h1>}
        </ Main>
    );
}