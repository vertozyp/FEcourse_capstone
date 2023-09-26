export default function Nav () {

    return (
        <nav>
            <img src='Logo.svg' alt="Little Lemon logo" id="nav-logo"/>
            <ul id="nav-list">
                <a href="/" id="home"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/menu"><li>Menu</li></a>
                <a href="/reservation"><li>Reservation</li></a>
                <a href="/order"><li>Order online</li></a>
                <a href="/login"><li>Log in</li></a>
            </ul>
        </nav>
    )
}