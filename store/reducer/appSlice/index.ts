import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './_models';
import sendMessage from '../../actions/app/sendMessage';

const initialState: AppState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(sendMessage.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = appSlice.actions;
export default appSlice.reducer;
