import styled from "styled-components";

export const InputLabel = styled.div`
  border: 1px solid #b7b7b7;
  background-color: #c1c1c1;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(0, 0, 0, 0.3)
  );
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: center;
  height: 20px;
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
  white-space: nowrap;
`;

export const LabelPrepend = styled.label`
  display: flex;
  color: #4a4a4a;
  align-items: center;
  input {
    @media (max-width: 600px) {
      border-radius: 5px;
    }
    flex: 3;
  }
`;
