import { useEffect } from 'react';
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

    return (
        <nav>
            <img src='Logo.svg' alt="Little Lemon logo" id="nav-logo"/>
            <ul id="nav-list">
                <Link to={links.home} id="home-link" 
                style={location.pathname === links.home ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>Home</li>
                </Link>
                <Link to={links.about} 
                style={location.pathname === links.about ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>About</li>
                </Link>
                <Link to={links.menu} 
                style={location.pathname === links.menu ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>Menu</li>
                </Link>
                <Link to={links.booking} 
                style={location.pathname === links.booking ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>Booking</li>
                </Link>
                <Link to={links.order} 
                style={location.pathname === links.order ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>Order online</li>
                </Link>
                <Link to={links.login} 
                style={location.pathname === links.login ? {backgroundColor:"#F4CE14"} : {backgroundColor:"white"}}>
                    <li>Log in</li>
                </Link>
            </ul>
        </nav>
    )
}