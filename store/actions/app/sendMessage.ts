import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataType } from './core/_model';
import { sendMessageRequest } from './core/_request';

const sendMessage = createAsyncThunk('app/getEquipments', async (data: DataType, { rejectWithValue }) => {
  try {
    await sendMessageRequest(data);
    return true;
  } catch (e: any) {
    return rejectWithValue(e);
  }
});

export default sendMessage;
