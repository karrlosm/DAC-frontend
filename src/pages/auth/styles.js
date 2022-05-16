import styled from 'styled-components';

export const Main = styled.div`
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    color: white;

    & > h1{
        padding-bottom: 20px;
    }
    & > h2{
        padding-bottom: 50px;
    }

    & > div{
        width: 320px;
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