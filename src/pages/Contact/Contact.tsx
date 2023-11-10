import { Link } from "react-router-dom";
import "./Contact.scss";
import styled from "styled-components";
import { colors } from "src/colors";

const ContactTitle = styled.h1``;
const ContactWrap = styled.div`
  padding: 2rem;
`;
const ContactLink = styled(Link)`
  font-weight: bold;
  color: ${colors.lightishblue};
`;
const ContactSection = styled.section``;
export default function Contact() {
  return (
    <ContactWrap>
      <ContactTitle>Contáctenos</ContactTitle>
      <ContactSection>
        Coméntenos en cual de nuestros{" "}
        <ContactLink to={"/"}>productos</ContactLink> está interesado, nos
        pondremos en contacto con usted en la mayor brevedad.{" "}
        <b>
          Se hacen envíos a todo el mundo, agradecemos consultar primero
          nuestras
        </b>{" "}
        <ContactLink to={"/faq"}>Preguntas Frecuentes</ContactLink> y{" "}
        <ContactLink to={"/wholesale"}>como comprar al por mayor</ContactLink>.
        Atención acerca de pedidos, por favor escribir a nuestro email.
      </ContactSection>
      <ContactSection>
        <br />
        Productos de Colombia.com S.A.S. NIT 802.011.428-5
        clientes@productosdecolombia.com Click to chat atención lunes a viernes,
        9am - 1pm / 2pm - 7pm, hora de Colombia Oficina administrativa: Cra 53 #
        74 - 117, P2, Barranquilla, Colombia
      </ContactSection>
    </ContactWrap>
  );
}
