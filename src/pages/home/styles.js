import styled from 'styled-components';

export const Main = styled.div`
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    min-height:100vh;

    & > nav {
        button {
            margin-bottom: 50px;
        }
    }
`;