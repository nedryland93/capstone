import Logo from "../assets/logo.png";
import Nav from "./Nav";
import NavHamburger from "./NavHamburger";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <Nav/>
            <NavHamburger/>
        </header>
    );
}
