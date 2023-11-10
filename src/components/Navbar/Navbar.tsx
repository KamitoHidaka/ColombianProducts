import * as GameIcon from "react-icons/gi";
import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

export default function Navbar() {
  const [side, setSide] = useState(false);
  const showSide = () => setSide(!side);
  return (
    <>
      <nav className="NavMenu">
        <Link to={"#"} className="NavIcon" onClick={showSide}>
          {side ? <GameIcon.GiCancel /> : <GameIcon.GiHamburgerMenu />}
        </Link>
      </nav>
      <nav onClick={showSide}>{side ? <SideNav /> : ""}</nav>
    </>
  );
}
