import styled from "styled-components";
import logo from "../../assets/img/logo.png"

export const Container = styled.div`
  display: flex;
  background: #272822;
  height: 50px;
  border: 5px ridge #d25b35;
  border-width: 0px 0px 5px;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  height:100%;
`;
