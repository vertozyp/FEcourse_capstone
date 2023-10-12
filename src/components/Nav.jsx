import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = {
    home: "/",
    about: "/about",
    menu: "/menu",
    booking: "/booking",
    order: "/order",
    login: "/login"
};

export default function Nav () {

    let location = useLocation();
    const [menuShown, setMenuShown] = useState(false);

    return (
        <nav>
            <img src='Logo.svg' alt="Little Lemon logo" id="nav-logo"/>
            <img src='hamburger menu.svg' alt='menu' id='nav-icon' onClick={() => setMenuShown(!menuShown)}/>
            <ul id="nav-list" style={menuShown ? {display:"flex"} : {}}>
                <Link to={links.home} id="home-link" 
                style={location.pathname === links.home ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>Home</li>
                </Link>
                <Link to={links.about} 
                style={location.pathname === links.about ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>About</li>
                </Link>
                <Link to={links.menu} 
                style={location.pathname === links.menu ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>Menu</li>
                </Link>
                <Link to={links.booking} 
                style={location.pathname === links.booking ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>Booking</li>
                </Link>
                <Link to={links.order} 
                style={location.pathname === links.order ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>Order online</li>
                </Link>
                <Link to={links.login} 
                style={location.pathname === links.login ? {backgroundColor:"#F4CE14"} : {backgroundColor:"transparent"}}>
                    <li>Log in</li>
                </Link>
            </ul>
        </nav>
    )
}