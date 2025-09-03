import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main";
import BookingPage from "./BookingPage";
import Delivery from "./Delivery";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api";

export default function RoutingPage() {
    /* Booking time high level management (useState) */
    const today = new Date();
    const initializeTimes = fetchAPI(today);
    
    const [availableTimes, setAvailableTimes] = useState(initializeTimes);
    const updateTimes = (value) => {
        setAvailableTimes(availableTimes.filter(time => time !== value));
    };

    const getFullDate = (date) => {
        const fullYear = date.getFullYear();
        const day = date.getDate();
        const fullDay = day < 10 ? `0${day}` : day;
        const month = date.getMonth() + 1;
        const fullMonth = month < 10 ? `0${month}` : month;
        const fullDate = `${fullYear}-${fullMonth}-${fullDay}`;
        return fullDate;
    }
    const [date, setDate] = useState(getFullDate(today));
    const updateDate = (newDateObj) => {
        setDate(getFullDate(newDateObj));
        setAvailableTimes(fetchAPI(newDateObj));
    }

    const [confirmData, setConfirmData] = useState({});
    const updateConfirmData = (newData) => {
        setConfirmData(newData);
    }

    /* Initialize useNavigate */
    const navigate = useNavigate();

    /* Form control function */
    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) {
            navigate("/confirmed");
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/bookingPage" element={
                <BookingPage 
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                    todayDate={date}
                    updateDate={updateDate}
                    submitForm={submitForm}
                    confirmData={updateConfirmData}
                />}
            />
            <Route path="/delivery" element={<Delivery info={availableTimes}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking info={confirmData}/>} />
        </Routes>
    );
}