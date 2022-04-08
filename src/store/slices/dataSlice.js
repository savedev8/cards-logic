import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

axios.defaults.baseURL = "http://localhost:3000/";

export const getAllData = createAsyncThunk(
    'allData/getAllData',
    async () => {
    const response = await axios.get('data.json');
    const data = response.data;
    console.log(data);
    return data;
    }
)
export const dataInfoSlice = createSlice({
    name: 'dataInfo',
    initialState: {
      id: null,
      dataSet: [],
      status: null,
      error: null,
    },
    reducers: {
      refreshActive(state, action) {
        state.id = action.payload;
      },
    },
    extraReducers: {
      [getAllData.pending]: (state) => {
        state.status = 'loading';
        state.error = null;
      },
      [getAllData.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.dataSet = action.payload;
      },
      [getAllData.rejected]: (state, action) => {
        state.status = 'rejected';
        // state.data = action.payload;
      },
    },
});

export const { refreshActive } = dataInfoSlice.actions;
  

