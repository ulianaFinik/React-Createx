import "./style.css"
import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "../hooks/useclickoutside";

const Header = () => {
    const [isOpen, setOpen] = useState();
    const [isOpenDrop, setOpenDrop] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
        //setOpen(false);
        // setOpenDrop(false);
    });

    return (
        <header className="header">
            <div className="header__container container">
                <a href="#" className="logo">
                    <img src='/img/logo.png' alt="logo" className="logo__img img" />
                </a>

                <nav className={`header__nav nav ${isOpen ? "active" : ""}`} ref={menuRef}>
                    <ul className="nav__list ul">
                        <li className="nav__item-dropdown" onClick={() => setOpenDrop(!isOpenDrop)}>
                            <a className="nav__link nav__link_dropdown a">
                                Services
                                <svg className="nav__link-img">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1377 5.52827C13.3981 5.78862 13.3981 6.21073 13.1377 6.47108L8.47108 11.1377C8.21073 11.3981 7.78862 11.3981 7.52827 11.1377L2.8616 6.47108C2.60125 6.21073 2.60125 5.78862 2.8616 5.52827C3.12195 5.26792 3.54406 5.26792 3.80441 5.52827L7.99967 9.72353L12.1949 5.52827C12.4553 5.26792 12.8774 5.26792 13.1377 5.52827Z" fill="white" />
                                    </svg>
                                </svg>
                            </a>
                            <div className={`dropdown ${isOpenDrop ? "dropdown_visible" : ""}`} >
                                <ul className="dropdown__list ul">
                                    <li className="dropdown__item"><a href="#" className="dropdown__link a">Social Media
                                        Marketing</a></li>
                                    <li className="dropdown__item"><a href="#" className="dropdown__link a">Search Engine
                                        Optimization</a></li>
                                    <li className="dropdown__item"><a href="#" className="dropdown__link a">Research Service</a>
                                    </li>
                                    <li className="dropdown__item"><a href="#" className="dropdown__link a">Content & PR
                                        Service</a></li>
                                    <li className="dropdown__item"><a href="#" className="dropdown__link a">Payed Traffic
                                    Management</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link a">Case
                            Studies</a></li>
                        <li className="nav__item"><a href="#" className="nav__link a">About
                            Us</a></li>
                        <li className="nav__item"><a href="#" className="nav__link a">Blog</a></li>
                        <li className="nav__item"><a href="#" className="nav__link a">Contact</a></li>
                    </ul>
                </nav>

                <a href="#" className="header__btn btn btn_fill btn_header a">Talk to a human</a>

                <button onClick={() => setOpen(!isOpen)} className={`header__burger burger button ${isOpen ? "active" : ""}`}>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                    <span className="burger__line"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;