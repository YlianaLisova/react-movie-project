import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const genreService = {
    getAllGenres: () => axiosService.get(urls.genres)
}