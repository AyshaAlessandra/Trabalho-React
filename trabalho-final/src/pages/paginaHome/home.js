import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Topo } from "../../components/headerHome/header";
import { Paginacao } from "../../components/paginacao/paginacao";
import { Catao } from "../../components/Cartao/cartao";
import { Container,Body, Cont1,Cont11,Cont12,Cont2,Cont21,Cont22 } from "./estiloHome";

export const Inicio = () =>{
  
    return(<>
    <Topo/>
  <Container/>
    <Body>
   {/* <Cont2>
    <Cont21></Cont21>
    <Cont22></Cont22>
   </Cont2> */}
   <Cont1>
<Cont11><h2>Comece sua jornada na tecnologia</h2></Cont11>
<Cont12>
    <Catao/>
    <Paginacao/>
</Cont12>
          
    </Cont1>
  
    </Body>
 </>);
}