import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="large_navbar">
            <p><Link to="/" className="link">Home</Link></p>
            <p><Link to="/bookingPage" className="link">Reservations</Link></p>
            <p><Link to="/delivery" className="link">Delivery</Link></p>
        </nav>
    )
}