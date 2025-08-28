import Logo from "../assets/logo.png";
import Nav from "./Nav";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <Nav/>
        </header>
    );
}
