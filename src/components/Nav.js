import { Link } from "react-router-dom"

export default function Nav({status, change}) {
    return (
        <nav className="large_navbar">
            <p
                onClick={() => change("Home")}
                style={
                    status==="Home"?
                    {fontWeight: "bold"} :
                    {fontWeight: "normal"}
                }
            >
                <Link to="/" className="link">Home</Link>
            </p>

            <p
                onClick={() => change("Res")}
                style={
                    status==="Res"?
                    {fontWeight: "bold"} :
                    {fontWeight: "normal"}
                }
            >
                <Link to="/bookingPage" className="link">Reservations</Link>
            </p>

            <p
                onClick={() => change("Del")}
                style={
                    status==="Del"?
                    {fontWeight: "bold"} :
                    {fontWeight: "normal"}
                }
            >
                <Link to="/delivery" className="link">Delivery</Link>
            </p>
        </nav>
    )
}