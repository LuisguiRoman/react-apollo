import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

//styles
import { fadeIn } from '../../styles/animations';

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
`;

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    
    &[aria-current]{
        color: black;
        &:after{
            ${fadeIn({time: '0.5s'})}
            content: "";
            width: 5px;
            height: 5px;
            bottom: 0;
            position: absolute;
            line-height: 1;
            background-color: black;
            border-radius: 50%;
        }
    }
`;