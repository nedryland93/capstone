import { useState, useEffect } from "react";
import "./BookingPage.css";
// import "../App.css";

export default function BookingPage({
    availableTimes, 
    updateTimes,
    todayDate,
    updateDate, 
    submitForm,
    confirmData,
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

    const [guests, setGuests] = useState("1");
    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
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
            guests,
            occasion
        };
        confirmData(formData);
        /* Calling function "formData" from the parent component */
        submitForm(formData);
        updateTimes(time);
    };

    return (
        <div className="bookingForm">
            <div className="titlebox">
                <h1 className="yellowserif">Reserve a table</h1>
            </div>
            <form onSubmit={manageSubmit}>
                <div className="field">
                    <label htmlFor="date">Choose date</label>
                    <input 
                        type="date" 
                        id="date"
                        name="date"
                        required
                        value={date}
                        min={todayDate}
                        onChange={handleDateChange}
                    />
                    {date==="" && <p className="validationError" data-testid="date-error">❌</p>}
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
                    {/* while "date" is empty, "time" state still have prev.value */}
                    {date==="" && <p className="validationError">❌</p>}
                </div>

                <div className="field">
                    <label htmlFor="guests">Number of Guests</label>
                    <input 
                        type="number" 
                        id="guests"
                        name="guests"
                        value={guests} 
                        min="1" 
                        max="10"
                        required
                        onChange={handleGuestsChange}
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
                        disabled={date==="" || time==="" ? true : false}
                        aria-label="On Click"
                    >Make Your reservation</button>
                </div>
            </form>
            {
                date!=="" ?
                <p style={{fontStyle: "italic", textAlign: "center"}}>
                    Note to reviewer: To test the form validation, 
                    remove the date from the date field.
                </p> :
                <p style={{textAlign: "center"}}>😎</p>
            }
        </div>
    );
}