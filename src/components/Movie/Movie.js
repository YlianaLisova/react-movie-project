import React from 'react';
import css from './movie.module.css'
import {Link} from "react-router-dom";

export const Movie = ({movie}) => {

    return (
        <div className={css.movie}>
            <Link to={movie.id.toString()} state={movie}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/>
                </div>
                <div className={css.info}>
                    <div className={css.title}><div>{movie.title}</div></div>
                </div>
            </Link>
        </div>
)
};

