import styled from 'styled-components';

export const Main = styled.div`
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    min-height:100vh;

    & > h1{
        padding-bottom: 20px;
    }
    & > h2{
        padding-bottom: 50px;
    }

    & > nav {
        width: 320px;
        button {
            margin-bottom: 20px;
        }
    }
`;