import { useState } from "react";
import { Link } from "react-router-dom";
import BookingAlert from "./BookingAlert";

export default function ConfirmedBooking ({info}) {
    /* Dialog control */
    const [dialog, setDialog] = useState(false);
    const toggleDialog = () => {
        setDialog(!dialog);
    };

    return (
        <div className="confirm">
            <h2>Confirm your reservation</h2>
            <div className="confirmInfo">
                <p>Date: {info.date}</p>
                <p>Time: {info.time}</p>
                <p>Guests: {info.guests}</p>
                <p>Occasion: {info.occasion}</p>
            </div>
            <button className="btn" onClick={toggleDialog}>Confirm</button>

            <BookingAlert status={dialog}>
                <h2>Your reservation has been confirmed!</h2>
                <div className="infopanel">
                    <p>Date: <span>{info.date}</span></p>
                    <p>Time: <span>{info.time}</span></p>
                    <p>Guests: <span>{info.guests}</span></p>
                    <p>Occasion: <span>{info.occasion}</span></p>
                </div>

                <Link to="/" className="link">
                    <button 
                        className="btn1"
                        onClick={toggleDialog}
                    >
                        Home page
                    </button>
                </Link>
                
            </BookingAlert>
        </div>
    );
}