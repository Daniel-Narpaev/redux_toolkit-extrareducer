import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/fetchApi"

const initialState = {
    meals:[],
    isLoading: false,
    error: "",
}


export const mealsSlice = createSlice({
    name:"meals",
    initialState,
    reducers:{
        mealsStarted(state){
          state.isLoading = true;
        },
        mealsSuccess(state, action){
          state.meals = action.payload;
          state.isLoading = false;
          state.error = "";
        },
        mealsFailed(state, action){
          state.isLoading = false;
          state.error = action.payload;
        },
    },

    extraReducers: (builder)=>{
      builder.addCase(getMeals.fulfilled, (state, action)=>{
        state.meals = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(getMeals.pending, (state, action)=>{
        state.isLoading = true;
        state.error = action.payload;
      });
      builder.addCase(getMeals.rejected, (state, action)=>{
        state.meals = action.payload;
        state.isLoading = false;
        state.error = "";
      });
    }
});

export const mealsActions = mealsSlice.actions;

export const getMeals = createAsyncThunk(
    "meals/getMeals",
    async(pending, {dispatch, rejectWithValue } )=>{
      try{
     const {data } = await fetchApi("foods");
     return data
      }
      catch(error) {
     rejectWithValue(error)
      }
    }
)
