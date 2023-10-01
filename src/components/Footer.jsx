import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <footer>
            <img src="favicon.svg" alt="Little lemon icon" id="footer-icon"/>
            <figure>
                <figcaption>Doormat navigation</figcaption>
                <ul>
                    < Link to="/"><li>Home</li></ Link>
                    < Link to="/about"><li>About</li></ Link>
                    < Link to="/menu"><li>Menu</li></ Link>
                    < Link to="/booking"><li>Booking</li></ Link>
                    < Link to="/order"><li>Order online</li></ Link>
                    < Link to="/login"><li>Log in</li></ Link>
                </ul>
            </figure>
            <figure>
                <figcaption>Contact</figcaption>
                <ul>
                    < Link to="/contact/address"><li>Address</li></ Link>
                    < Link to="/contact/phone"><li>Phone number</li></ Link>
                    < Link to="/contact/email"><li>E-mail</li></ Link>
                </ul>
            </figure>
            <figure>
                <figcaption>Social media links</figcaption>
                <ul>
                    < Link to="https://www.facebook.com/" target="_blank"><li>Facebook</li></ Link>
                    < Link to="https://www.instagram.com/" target="_blank"><li>Instagram</li></ Link>
                    < Link to="https://twitter.com/" target="_blank"><li>Twitter</li></ Link>
                </ul>
            </figure>
        </footer>
    )
}