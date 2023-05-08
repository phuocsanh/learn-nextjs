import { ILoginPayload } from '@/models/auth';
import axiosClient from './axios-client';

export const authApi = {
  login(payload: ILoginPayload) {
    return axiosClient.post('/login', payload);
  },
  logout() {
    return axiosClient.post('/logout');
  },
  getProfile() {
    return axiosClient.get('/profile');
  },
};
