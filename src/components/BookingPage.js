import { useState, useEffect } from "react";
import "./BookingPage.css";

export default function BookingPage({
    availableTimes, 
    updateTimes,
    todayDate, 
    updateDate, 
    submitForm,
    confirmData
    }) {
    useEffect(() => {
        document.title = "Little Lemon - Booking Page";
    }, []);

    /* Input control variables */

    const [date, setDate] = useState(todayDate);
    const handleDateChange = (e) => {
        const newDateStr = e.target.value;
        setDate(newDateStr);
        const newDateObj = new Date(newDateStr);
        updateDate(newDateObj);
    }

    const [time, setTime] = useState(availableTimes.length > 0 ? availableTimes[0] : "");
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const [guest, setGuest] = useState("1");
    const handleGuestChange = (e) => {
        setGuest(e.target.value);
    }

    const [occasion, setOccasion] = useState("Normal");
    const handleOccasioChange = (e) => {
        setOccasion(e.target.value);
    }

    /* Form control */

    const manageSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guest,
            occasion
        };
        confirmData(formData);
        /* Calling function "formData" from the parent component */
        submitForm(formData);
        updateTimes(time);
    };

    return (
        <div className="bookingForm">
            <div className="bookingHeader">
                <h1 className="yellowserif">Reserve a table</h1>
            </div>
            <form onSubmit={manageSubmit}>
                <div className="field">
                    <label htmlFor="date">Choose date {todayDate}</label>
                    <input 
                        type="date" 
                        id="date"
                        name="date"
                        required
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>
                
                <div className="field">
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        name="time"
                        required
                        value={time}
                        onChange={handleTimeChange}
                    >
                        {availableTimes.map(item => {
                            return <option key={item} value={item}>{item}</option>;
                        })}
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input 
                        type="number" 
                        id="guests"
                        name="guests"
                        value={guest} 
                        min="1" 
                        max="10"
                        required
                        onChange={handleGuestChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={occasion}
                        onChange={handleOccasioChange}
                    >
                        <option value="Normal">Normal</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <div className="submitField">
                    <button 
                        className="btn1" 
                        type="submit"
                    >Make Your reservation</button>
                </div>
            </form>
        </div>
    );
}