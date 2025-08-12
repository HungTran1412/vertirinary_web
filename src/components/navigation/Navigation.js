import React from "react";
import "./Navigation.scss";
import {
    Link,
    NavLink
} from "react-router-dom";
import logo from "../../assets/images/logo.jpg";


class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    }
    
    render() {
        const { menuOpen } = this.state;

        return (
            <header className="navbar">
                <div className="navbar_logo">
                    <img src={logo} alt="Sakura Pet Clinic & Hotel" />
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}><span>Sakura Pet Clinic & Hotel</span></NavLink>
                </div>
                <div
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={this.toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="navbar__links">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Giới thiệu</NavLink>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Dịch vụ</NavLink>
                    <NavLink to="/booking" className={({ isActive }) => (isActive ? 'active' : '')}>Đặt lịch</NavLink>
                    <NavLink to="/login" className="btn_login">Đăng nhập</NavLink>
                </nav>
            </header>
        )
    }
}

export default Navigation;