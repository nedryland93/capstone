import './App.css';
import Header from "./components/Header.js";
import RoutingPage from "./components/RoutingPage.js";
import Footer from "./components/Footer.js";

export default function App() {
    return (
        <div className='app'>
            <Header/>
            <RoutingPage/>
            <Footer/>
        </div>
    );
}
