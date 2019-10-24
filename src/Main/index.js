import React from 'react';
import ReactJson from 'react-json-view'
 
import { Container, Card } from './styles';
import NavBar from '../NavBar';

export default function Main() {
    const data = {
        "1":{
            "teste": "teste"
        }
    }
  return (
    <>
        <NavBar/>
        <Container>
            <Card>
                teste
            </Card>
            <Card>
            <ReactJson src={data} theme="monokai" iconStyle="circle" displayDataTypes={false}/> 
            </Card>
        </Container>
    </>
  );
}
