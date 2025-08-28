import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <p><Link to="/" className="link">Home</Link></p>
            <p><Link to="/bookingPage" className="link">Reservations</Link></p>
            <p><Link to="/menu" className="link">Menu</Link></p>
        </nav>
    )
}