import React from 'react';
import {useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";

export const MoviesList = () => {
    const {movies} = useSelector(state => state.movies)


    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

