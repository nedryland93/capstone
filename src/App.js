import './App.css';
import Header from "./components/Header.js";
import RoutingPage from "./components/RoutingPage.js";
import Footer from "./components/Footer.js";
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState("Home");
    const handleSelected = (selection) => {
        setSelected(selection);
    }

    return (
        <div className='app'>
            <Header status={selected} change={handleSelected} />
            <RoutingPage change={handleSelected} />
            <Footer/>
        </div>
    );
}
