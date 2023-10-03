import { useEffect, useState } from "react"
import Input from "../common/Input";
import Select from "../common/Select";

export default function DetailsInput ({date, availableTimes, setDate}) {

    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    return (
        <section id="booking-details" >
            <h4>When yould You like to come?</h4>
            <Input id="book-date" type="date" value={date} 
                onChange={e => {
                    const today = new Date();
                    if(new Date(e.target.value) >= new Date(today.getFullYear(), today.getMonth(), today.getDate()))
                        setDate(e.target.value);
                    else alert("You can not book table for past days.");
            }}>
                Date *
            </Input>
            <Select id="book-time" value={time} onChange={e => setTime(e.target.value)} options={availableTimes}>
                Time *
            </Select>
            <Input id="book-guests" type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)}>
                Number of guests *
            </Input>
            <Select id="book-occasion" value={occasion} onChange={e => setOccasion(e.target.value)} options={["", "Birthday", "Anniversary"]}>
                Occasion
            </Select>
        </section>
    )
}