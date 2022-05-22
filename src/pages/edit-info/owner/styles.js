import styled from 'styled-components';

export const Main = styled.div`
    min-width: 300px;
    color: white;
    > h1 {
        padding-bottom: 25px;
    }
    > h2 {
        padding-bottom: 18px;
    }
`;

export const InputContent = styled.div`
    padding-bottom: 25px;
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > label {
        font-size: 16px;
    }
`;
