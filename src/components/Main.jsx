import { Routes, Route } from "react-router";
import HomePage from "./home/Homepage";
import BookingPage from "./booking/BookingPage";
import ConfirmedBooking from "./booking/ConfirmedBooking";

export default function Main () {

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}