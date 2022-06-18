import React from "react";
import { Card, Button } from "react-bootstrap";
import livro1 from "../../img/livro1.jpg"


export const Catao = ()=>{
    return(
    <>
    <Card style={{ width: '18rem' , height : '32%' }}>
  <Card.Img variant="top" src=" " />
  <Card.Body>
    <Card.Title>Lógica de Programação: A Construção de Algoritmos e Estruturas de Dados</Card.Title>
    <Card.Text>
    Neste livro, o aluno encontrará informações básicas sobre lógica de programação.
    </Card.Text>
    <Button variant="danger">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '32%' }}>
  <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987529332454981642/images.1.jpg" />
  <Card.Body>
    <Card.Title>Algoritmos</Card.Title>
    <Card.Text>
    Este livro abrange os principais conceitos de programação de computadores, incluindo a norma ISO 5807:1985 e importantes fundamentos.
    </Card.Text>
    <Button variant="danger">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height : '32%' }}>
  <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/983115650119663617/987529332454981642/images.1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="danger">Go somewhere</Button>
  </Card.Body>
</Card>





    </>);
}