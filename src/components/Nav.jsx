export default function Nav () {

    return (
        <nav>
            <img src='Logo.svg' alt="Little Lemon logo" className="nav-logo"/>
            <ul className="nav-list">
                <a href="/" className="nav-item"><li>Home</li></a>
                <a href="/about" className="nav-item"><li>About</li></a>
                <a href="/menu" className="nav-item"><li>Menu</li></a>
                <a href="/reservation" className="nav-item"><li>Reservation</li></a>
                <a href="/order" className="nav-item"><li>Order online</li></a>
                <a href="/login" className="nav-item"><li>Log in</li></a>
            </ul>
        </nav>
    )
}