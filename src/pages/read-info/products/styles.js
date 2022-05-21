import styled from 'styled-components';

export const Main = styled.div`
    min-width: 300px;
    color: white;
    > h1 {
        padding-bottom: 25px;
    }
`;

export const ProductBox = styled.div`
    width: 100%;
    background-color: #DEDEDE;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

export const BoxRow = styled.div`
    display: flex;
    justify-content: space-between;
    color: #d62828;

    & > .title {
        color: darkblue;
        font-weight: 600;
    }
`;
