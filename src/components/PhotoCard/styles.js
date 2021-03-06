import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';


export const Article = styled.article`
    min-height: 150px;
`;

export const Figure = styled.figure`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`;

export const Image = styled.img`
    ${fadeIn('1s', 'ease-in-out')};
    box-shadow: 0px 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;