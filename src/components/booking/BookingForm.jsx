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

    function checkTables() {
        var checkRadio = document.querySelector(
            'input[name="tables"]:checked');

        if(checkRadio == null) {
            document.getElementById("table-status").innerHTML = "Choose one table.";
            return false;
        }
        else return true;
    }

    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        if (checkTables()){
            if(submitAPI()) navigate("/confirmation");
            else alert("Oops, we were not able to proceed your reservation. \nPlease try it again.");
        }
        else alert("Pleas fill in all required fields first.");
    }

    return (
        <form id="booking-form" onSubmit={submitForm}>
            <DetailsInput availableTimes={availableTimes} date={date} setDate={setDate}/>
            <TableSelection />
            <h6 id="table-status"></h6>
            <Button type="submit">Make Your reservation</Button>
        </form>
    )
}