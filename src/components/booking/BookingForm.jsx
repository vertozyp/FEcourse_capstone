import DetailsInput from "./DetailsInput";
import TableSelection from "./TableSelection";
import Button from "./../common/Button";
import { useEffect, useState } from "react";
import fetchAPI from "../API/fetchAPI";
import { useNavigate } from "react-router";
import submitAPI from "../API/submitAPI";

export default function BookingForm () {

    const [date, setDate] = useState("2023-10-03");
    const [availableTimes, setAvailableTimes] = useState([])

    useEffect(() => setAvailableTimes(fetchAPI(date)), [date])

    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if(submitAPI()) navigate("/booking/confirmation");
    }

    return (
        <form id="booking-form" onSubmit={submitForm}>
            <DetailsInput availableTimes={availableTimes} date={date} setDate={setDate}/>
            <TableSelection />
            <Button type="submit">Make Your reservation</Button>
        </form>
    )
}