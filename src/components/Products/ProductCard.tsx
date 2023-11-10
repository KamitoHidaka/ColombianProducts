import styled from "styled-components";
import Bolso from "src/assets/Bolso.jpg";
import { colors } from "src/colors";
import "src/index.scss";
import { Link } from "react-router-dom";

const CardWrap = styled(Link)`
  background-color: ${colors.creamwhite};
  width: 16rem;
  color: black;
  border-radius: 1rem;
  margin: auto;
`;
const CardImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
const CardInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: #2c2c2c solid 0.1rem;
`;
const CardName = styled.span`
  font: 1.5rem bold;
  width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardPrice = styled.span`
  margin-top: 0.5rem;
  text-align: center;
  font: 2rem bold;
  color: #ee9b01;
`;

export default function ProductCard() {
  return (
    <CardWrap to={"#"}>
      <CardImage srcSet={Bolso} />
      <CardInfo>
        <CardName>Mochila Bolso Wayuu colores tierra</CardName>
        <CardPrice>USD $38.03</CardPrice>
      </CardInfo>
    </CardWrap>
  );
}
