import { DataType } from './_model';
import axiosInstance from '@/api';

export const sendMessageRequest = async (data: DataType): Promise<'success' | Error> => {
  try {
    const response = await axiosInstance.post('/api/contact', data);
    return response.data;
  } catch (e: any) {
    return Promise.reject(new Error(e?.response?.data || e?.message || e));
  }
};
