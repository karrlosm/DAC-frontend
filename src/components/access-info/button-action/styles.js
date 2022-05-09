import styled from 'styled-components';

export const Main = styled.div`

    > button {
        text-transform: uppercase;
        width: 100%;
        border: none;
        display: flex;
        background-color: #C4C4C4;
        box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;

        :hover {
            color: white;
            background-color: #d62828;
        }
    }
`;

