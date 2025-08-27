import { useEffect } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

export default function App() {
    useEffect(() => {
        document.title = "Little Lemon Restaurant";
    }, []);

    return (
        <div className='app'>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
}
