import styled from 'styled-components';

export const Button = styled.button`
    height: 100%;
    width: 10%;
    background: ${props => props.color || "grey"};
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
    margin: ${props => props.margin || "0px"};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    display: flex;
    justify-content: center;
    flex: 1;
`;
