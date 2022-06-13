import React from 'react';
import {Outlet} from "react-router-dom";
import {MoviesList} from "../../components";

export const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
            <Outlet/>
        </div>
    );
};

