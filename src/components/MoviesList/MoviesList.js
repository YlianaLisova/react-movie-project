import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import css from './allMovies.module.css'

export const MoviesList = () => {
    const {movies:{results}} = useSelector(state => state.movies)
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAllMovies())
    },[dispatch])

    return (
        <div className={css.movies}>
            {results && results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

