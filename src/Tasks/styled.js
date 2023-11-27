import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 0;
    transition: filter 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};;
    `}    

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
    `}   

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;