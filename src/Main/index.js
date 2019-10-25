import React from "react";
import ReactJson from "react-json-view";

import { Container, Card, Input, Label } from "./styles";
import NavBar from "../NavBar";

export default function Main() {
  const data = {
    "1": {
      teste: "teste"
    }
  };
  return (
    <>
      <NavBar />
      <Container>
        <Card>
          <Label>Insira o que deseja procurar</Label>
          <Input />
        </Card>
        <Card>
          <ReactJson
            src={data}
            theme="monokai"
            iconStyle="circle"
            displayDataTypes={false}
          />
        </Card>
      </Container>
    </>
  );
}
