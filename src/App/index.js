import React from "react";
import Main from "../Pages/Main";
import { Container } from "./styles";
import { NavBar } from "../Components";

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Main />
    </Container>
  );
}

export default App;
