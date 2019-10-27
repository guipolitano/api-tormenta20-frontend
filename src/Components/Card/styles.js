import styled from "styled-components";

export const Card = styled.div`
  max-height: 40%;
  overflow-y: auto;
  display: flex;
  padding: 10px 10px;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #272822;
  border: 5px ridge #d25b35;
  border-radius: 5px;
  margin: 2px;
  transition: all 0.5s ease-in-out;
  width: 50%;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
`;
