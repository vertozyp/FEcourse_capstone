import { useNavigate } from "react-router";
import Button from "../common/Button"

export default function Hero () {

    const navigate = useNavigate();

    return (
        <section id="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3 id="hero-description">We are a familly owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</h3>
            <Button 
                type="button" 
                onClick={e => {
                    e.preventDefault();
                    navigate("/booking");
                }}>
                Reserve a table
            </Button>
        </section>
    )
}