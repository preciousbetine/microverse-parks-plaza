import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getParks } from '../apis/data';

const initialState = {
  fetched: false,
  parks: [],
};

const fetchParks = createAsyncThunk(
  'parks/fetchAll',
  async (activityId, thunkAPI) => {
    try {
      const result = await getParks(activityId);
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const parkSlice = createSlice({
  name: 'parks',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchParks.pending, (state) => ({
      ...state,
      fetched: false,
    }));
    builder.addCase(fetchParks.fulfilled, (state, action) => ({
      fetched: true,
      parks: [
        ...state.parks,
        action.payload,
      ],
    }));
    builder.addCase(fetchParks.rejected, (state) => ({
      ...state,
    }));
  },
});

export { fetchParks };
export default parkSlice.reducer;
