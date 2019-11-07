import styled from "styled-components";
import logo from "../../assets/img/logo.png"

export const Container = styled.div`
  display: flex;
  background: #272822;
  height: 70px;
  border: 5px ridge #d25b35;
  border-width: 0px 0px 5px;
  justify-content: center;
    a{
    display: flex;
    justify-content: center;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "Logo Tormenta20"
})`
  height:100%;
`;
