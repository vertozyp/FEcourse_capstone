export default function Footer () {
    return (
        <footer>
            <img src="favicon.svg" alt="Little lemon icon" id="footer-icon"/>
            <figure>
                <figcaption>Doormat navigation</figcaption>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/menu"><li>Menu</li></a>
                    <a href="/reservation"><li>Reservation</li></a>
                    <a href="/order"><li>Order online</li></a>
                    <a href="/login"><li>Log in</li></a>
                </ul>
            </figure>
            <figure>
                <figcaption>Contact</figcaption>
                <ul>
                    <a href="/contact/address"><li>Address</li></a>
                    <a href="/contact/phone"><li>Phone number</li></a>
                    <a href="/contact/email"><li>E-mail</li></a>
                </ul>
            </figure>
            <figure>
                <figcaption>Social media links</figcaption>
                <ul>
                    <a href="https://www.facebook.com/" target="_blank"><li>Facebook</li></a>
                    <a href="https://www.instagram.com/" target="_blank"><li>Instagram</li></a>
                    <a href="https://twitter.com/" target="_blank"><li>Twitter</li></a>
                </ul>
            </figure>
        </footer>
    )
}