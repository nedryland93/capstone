import Logo from "../assets/logo.png";
import Nav from "./Nav";
import NavHamburger from "./NavHamburger";
import "./Header.css";

export default function Header({status, change}) {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <Nav status={status} change={change} />
            <NavHamburger/>
        </header>
    );
}
