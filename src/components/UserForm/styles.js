import styled from 'styled-components';


export const Form = styled.form`
    padding: 16px 0;
    width: 90%;
    margin: auto;
`;

export const Input = styled.input`
    border: 1px solid #cccccc;
    border-radius: 3px;
    margin-bottom: 8px;
    display: block;
    width: 100%;
    padding: 7px 10px;
`;

export const Button = styled.button`
    background-color: #8d00ff;
    border-radius: 3px;
    color: #ffffff;
    display: block;
    width: 100%;
    text-align: center;
    padding: 7px 10px;
    &[disabled]{
        cursor: not-allowed;
    }
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
    text-align: center;
`;

export const Error = styled.div`
    font-size: 14px;
    text-align: center;
    color: red;
`;