import styled from 'styled-components';

export const Main = styled.div`
    padding: 25px;
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    min-height:100vh;

    h1 {
        padding-top: 25px;
    }

    > select{ 
        background: #DEDEDE;
        border: 2px solid #FFFFFF;
        box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
        border-radius: 5px;
        width: 250px;
        margin-top: 8px;
        padding: 8px;
        font-size: 16px;
        color: #d62828;

        :focus {
            outline: 0;
        }
        
    }

`;