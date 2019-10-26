import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";
import axios from "axios";
import { Loader, Card, Label, LabelPrepend, Button } from "../../Components";

import { Container, H1 } from "./styles";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("classes");
  const [result, setResult] = useState("SUCESSO");

  useEffect(() => {
    axios
      .get("https://tormenta20-api.herokuapp.com/api/classes")
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://tormenta20-api.herokuapp.com/api/${search}`)
      .then(response => {
          setData(response.data);
          setResult("SUCESSO")
          setLoading(false);
      })
      .catch(error => {
        setResult("ERRO");
        setData({});
        setLoading(false);
      });
  };

  const handleInput = event => {
    setSearch(event.target.value);
  };

  const handleEnter = event => event.key === "Enter" ? handleSearch() : null;

  return (
    <>
      <Container>
        <Card>
          <Label text="Insira o que deseja procurar" />
          <LabelPrepend
            text={<i>https://tormenta20-api.herokuapp.com/api/</i>}
            placeholder="classes, racas, pericias, divindades..."
            value={search}
            onKeyDown={handleEnter}
            onChange={handleInput}
          >
            <Button
              text="Pesquisar"
              color="#0088c7"
              margin="0px 0px 0px 10px"
              onClick={handleSearch}
            />
          </LabelPrepend>
        </Card>
        <Card>
          {!loading ? (
            <>
              <H1>Resultado</H1>
              <ReactJson
                collapsed={true}
                collapseStringsAfterLength={50}
                src={data}
                name={result}
                theme="monokai"
                iconStyle="circle"
                displayDataTypes={false}
              />
            </>
          ) : (
            <Loader margin="40px" color="#d25b35" />
          )}
        </Card>
      </Container>
    </>
  );
}
