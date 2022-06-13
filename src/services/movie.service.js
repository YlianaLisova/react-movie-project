import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const movieService = {
    getAllMovies: () => axiosService.get(urls.movies),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}`),
    getMovieByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: `${genreId}`}})


}