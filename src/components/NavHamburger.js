import { Link } from "react-router-dom"
import { useState, useRef } from "react";

export default function Nav() {
    // Reference to the checkbox that manages the "hamburger" menu
    const checkbox = useRef();
    // State that manages the visibility of the drop-down menu
    const [isVisible, setIsVisible] = useState(false);
    const manageVisibility = () => {
        setIsVisible(!isVisible);
    };
    // When the drop-down menu disappears because a link has been clicked,
    // the checkbox state must also be reset.
    const resetMenu = () => {
        setIsVisible(false);
        checkbox.current.checked = false;
    }

    return (
        <nav className="hamburger">
            <label className="menulogo">
                <input type="checkbox" ref={checkbox} onClick={manageVisibility}/>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <div 
                className="menubox"
                style={{maxHeight: isVisible ? "300px" : "0px"}}
            >
                <Link to="/" className="link" onClick={resetMenu}><p>Home</p></Link>
                <Link to="/bookingPage" className="link" onClick={resetMenu}><p>Reservations</p></Link>
                <Link to="/delivery" className="link" onClick={resetMenu}><p>Delivery</p></Link>
            </div>
        </nav>
    )
}