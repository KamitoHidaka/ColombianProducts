import { NavData } from "./NavData";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const SideWrap = styled.nav`
  width: 18rem;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  /* top: 0; */
  z-index: 100%;
`;

export default function SideNav() {
  return (
    <SideWrap>
      {NavData.map((item, index) => {
        return <NavMenu item={item} key={index} />;
      })}
    </SideWrap>
  );
}
