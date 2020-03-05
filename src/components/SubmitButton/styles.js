import styled from 'styled-components';

export const Button = styled.button`
    background-color: #8d00ff;
    border-radius: 3px;
    color: #ffffff;
    display: block;
    width: 90%;
    text-align: center;
    padding: 7px 10px;
    margin: auto;
    &[disabled]{
        cursor: not-allowed;
    }
`;