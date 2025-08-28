import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import BookingPage from "./BookingPage";
import Menu from "./Menu";

export default function Home() {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/bookingPage" element={<BookingPage/>} />
            <Route path="/menu" element={<Menu/>} />
        </Routes>
    )
}