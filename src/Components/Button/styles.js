import styled from 'styled-components';

export const Button = styled.button`
    height: 100%;
    width: 10%;
    background: ${props => props.color || "grey"};
    margin: ${props => props.margin || "0px"};
    border-radius: 5px;
`;
