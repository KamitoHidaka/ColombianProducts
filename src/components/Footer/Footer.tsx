import styled from "styled-components";
import Fedex from "src/assets/Fedex.svg";
import Paypal from "src/assets/Paypal.svg";
import PayU from "src/assets/PayU.svg";
import { Link } from "react-router-dom";
import { colors } from "src/colors";

const FooterWrap = styled.div`
  background-color: #2b2b2b;
  color: white;
  /* width: 100%; */
  padding: 1rem;
`;
const FooterImages = styled.div`
  display: flex;
  width: 34rem;
  margin: auto;
`;
const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const ColumnTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

const FooterLink = styled(Link)`
  margin-top: 1rem;
  color: #d3d3d3;
`;
const Images = styled.img`
  width: 30%;
  margin: auto;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterImages>
        <Images src={Fedex} alt="" />
        <Images src={Paypal} alt="" />
        <Images src={PayU} alt="" />
      </FooterImages>
      <FooterInfo>
        <FooterColumn>
          <ColumnTitle>Preguntas</ColumnTitle>
          <FooterLink to={"#"}>¿Como Comprar?</FooterLink>
          <FooterLink to={"#"}>Mayoreo</FooterLink>
          <FooterLink to={"#"}>Tiempo de Entrega</FooterLink>
          <FooterLink to={"#"}>Formas de Pago</FooterLink>
          <FooterLink to={"#"}>Seguridad</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Servicio al Cliente</ColumnTitle>
          <FooterLink to={"#"}>Cotacto</FooterLink>
          <FooterLink to={"#"}>Rastreo de Pedido</FooterLink>
          <FooterLink to={"#"}>Garantia</FooterLink>
          <FooterLink to={"#"}>Devoluciones</FooterLink>
          <FooterLink to={"#"}>Politica de Privacidad</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Mi Cuenta</ColumnTitle>
          <FooterLink to={"#"}>Registrarse</FooterLink>
          <FooterLink to={"#"}>Carro de Compras</FooterLink>
          <FooterLink to={"#"}>Mis Pedidos</FooterLink>
          <FooterLink to={"#"}>Actualizar Datos</FooterLink>
        </FooterColumn>
      </FooterInfo>
    </FooterWrap>
  );
}
