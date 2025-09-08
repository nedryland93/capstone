import { useState } from "react";
import { Link } from "react-router-dom";
import BookingAlert from "./BookingAlert";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking ({info, change}) {
    /* Dialog control */
    const [dialog, setDialog] = useState(false);
    const toggleDialog = () => {
        setDialog(!dialog);
    };

    return (
        <div className="confirm">
            <div className="titlebox">
                <h1 className="yellowserif">Confirm your reservation</h1>
            </div>
            
            <div className="confirmPanel">
                <div className="confirmInfo">
                    <h2 className="darkserif">Reservation info:</h2>
                    <p className="darksans">Date: <span>{info.date}</span></p>
                    <p className="darksans">Time: <span>{info.time}</span></p>
                    <p className="darksans">Guests: <span>{info.guests}</span></p>
                    <p className="darksans">Occasion: <span>{info.occasion}</span></p>
                </div>

                <div className="buttonSection">
                    <Link to="/" className="link" onClick={() => change("Home")}>
                        <button 
                            className="btn2"
                            aria-label="On Click"
                        >
                            Abandon
                        </button>
                    </Link>

                    <button 
                        className="btn1" 
                        onClick={toggleDialog}
                        aria-label="On Click"
                    >
                        Confirm
                    </button>
                </div>
            </div>
            

            <BookingAlert status={dialog}>
                <h2>Your reservation has been confirmed!</h2>
                <div className="infopanel">
                    <p>Date: <span>{info.date}</span></p>
                    <p>Time: <span>{info.time}</span></p>
                    <p>Guests: <span>{info.guests}</span></p>
                    <p>Occasiion: <span>{info.occasion}</span></p>
                </div>
                

                <Link to="/" className="link" onClick={() => change("Home")}>
                    <button 
                        className="btn1"
                        onClick={toggleDialog}
                        aria-label="On Click"
                    >
                        Home page
                    </button>
                </Link>
                
            </BookingAlert>
        </div>
    );
}