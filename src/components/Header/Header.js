import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {UserAuth} from "../UserAuth/UserAuth";

export const Header = () => {
    function toggleDarkTheme() {
        return document.body.classList.toggle('dark-theme');
    }

    return (
        <div className={css.header}>
            <div className={css.leftBar}>
                <img
                src="https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png"
                alt="MovieDB"/>
                <NavLink className={css.link} to={'movies'}>Movies</NavLink>
            </div>
            <div className={css.user}>
                <div>
                    <label className={css.switch}>
                        <input onClick={toggleDarkTheme} type="checkbox"/>
                        <span className={`${css.slider} ${css.round}`}></span>
                    </label>
                </div>
                <UserAuth/>
            </div>
        </div>
    );
};

