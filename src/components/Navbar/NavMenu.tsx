/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Link } from "react-router-dom";

type ItemProps = {
  item: any;
};

const NavLink = styled(Link)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #2b2b2b;
  height: 4rem;
  padding: 1rem;
  margin: 0.5rem;
`;
const NavSpan = styled.span`
  margin-left: 1rem;
`;

const NavMenu = ({ item }: ItemProps) => {
  return (
    <NavLink to={item.path}>
      {item.icon}
      <NavSpan>{item.title}</NavSpan>
    </NavLink>
  );
};

export default NavMenu;
