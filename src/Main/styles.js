import styled from 'styled-components';
import background from '../assets/img/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  height:100%;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  min-width: 50%;
  @media (min-width:300px) {
      min-width: 90%;
  }
  padding: 10px 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  background: grey;
  border: 5px ridge orange;
  border-radius: 5px;
  flex: 0 1 calc(25% -1em);
`;
