import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies:[]
}

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
)
let movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{}
});

const {reducer: movieReducer} = movieSlice;

export default movieReducer;
export const movieActions = {
    getAllMovies
}