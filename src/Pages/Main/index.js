import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";
import axios from "axios";
import {
  Loader,
  Card,
  Label,
  LabelPrepend,
  Button,
  H1,
  SubText,
  CardHeader
} from "../../Components";

import { Container } from "./styles";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("classes");
  const [result, setResult] = useState("SUCESSO");
  const [title, setTitle] = useState("Resultado para classes");

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
        setResult("SUCESSO");
        setTitle(`Resultado para ${search}`);
        setLoading(false);
      })
      .catch(error => {
        setResult("ERRO");
        setTitle(`Resultado para ${search}`);
        setData({
          message:
            "Rota não encontrada, olhe a documentação para ver as rotas disponíveis",
          data: []
        });
        setLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <H1>Bem vindo a API de Tormenta 20</H1>
            <hr />
            <p>
              Manual de como utilizar&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/guipolitano/api-tormenta20-frontend#rotas"
              >
                AQUI
              </a>
            </p>
            <p>
              Este é um sistema <u>não-oficial</u> feito com base no Sistema de
              RPG Tormenta 20.
            </p>
            <p>
              O presente projeto foi feito como estudo de desenvolvimento WEB,
              bem como para facilitar a consulta dos recursos básicos do
              Sistema.
            </p>
            <p>
              Todas as informações exibidas pertencem a&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jamboeditora.com.br/"
              >
                Jambô Editora
              </a>
              &nbsp;e caso solicitado o site será removido imediatamente. Apoiem
              os criadores adquirindo o livro.
            </p>
          </CardHeader>
          <hr />
          <Label text="Insira o que deseja procurar" />
          <LabelPrepend
            text={<i>tormenta20-api.herokuapp.com/api/</i>}
            placeholder="classes, racas, pericias, divindades..."
            value={search}
            onKeyDown={event => (event.key === "Enter" ? handleSearch() : null)}
            onChange={event => setSearch(event.target.value)}
          >
            <Button
              text="Pesquisar"
              color="#e2dbbe"
              margin="0px 0px 0px 10px"
              onClick={handleSearch}
            />
          </LabelPrepend>
          <SubText text="Ex.: 'classes', 'classes/barbaro', 'classes/barbaro/tabela', 'racas', etc" />
        </Card>
        <Card>
          {!loading ? (
            <>
              <H1>{title}</H1>
              <hr />
              <ReactJson
                collapsed={2}
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
