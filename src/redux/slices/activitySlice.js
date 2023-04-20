import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActivities } from '../apis/data';

const initialState = {
  activities: [],
  loading: false,
};

const fetchActivities = createAsyncThunk(
  'data/fetchAll',
  async (_, thunkAPI) => {
    try {
      const result = await getActivities();
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchActivities.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchActivities.fulfilled, (_, action) => ({
      activities: action.payload,
      loading: false,
    }));
    // builder.addCase(fetchActivities.rejected, () => ({
    // }));
  },
});

export { fetchActivities };
export default activitySlice.reducer;
