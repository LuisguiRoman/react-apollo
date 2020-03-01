import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    &.fixed{
        background-color: white;
        box-shadow: 0 0 20px rgba(0,0,0,.2);
        border-radius: 60px;
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 10;
    }
`;

export const ListItem = styled.li`
    padding: 0 8px;
    list-style: none;
`;
