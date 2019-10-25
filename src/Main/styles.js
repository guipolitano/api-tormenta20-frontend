import styled from "styled-components";
import background from "../assets/img/background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  padding: 10px 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  background: #272822;
  border: 5px ridge orange;
  border-radius: 5px;
  flex: 0 1 calc(25% -1em);
  margin: 2px;
  transition: all 0.5s ease-in-out;
`;

export const Input = styled.input`
  background-color: white;
  border-radius: 5px;
  height: 20px;
  padding: 5px;
`;

export const Label = styled.label`
  color: white;
`;
