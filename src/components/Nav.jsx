import { Link } from 'react-router-dom';

export default function Nav () {

    return (
        <nav>
            <img src='Logo.svg' alt="Little Lemon logo" id="nav-logo"/>
            <ul id="nav-list">
                <Link to="/" id="home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/booking"><li>Booking</li></Link>
                <Link to="/order"><li>Order online</li></Link>
                <Link to="/login"><li>Log in</li></Link>
            </ul>
        </nav>
    )
}