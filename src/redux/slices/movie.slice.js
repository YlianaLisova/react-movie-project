import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies:[]
}

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async () => {
        const {data} = await movieService.getAllMovies();
        return data
    }
)
let movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(getAllMovies.fulfilled,(state, action)=>{
                state.movies = action.payload
            })
    }

});

const {reducer: movieReducer} = movieSlice;

export default movieReducer;
export const movieActions = {
    getAllMovies
}