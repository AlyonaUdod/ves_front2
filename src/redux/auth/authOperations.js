import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

axios.defaults.baseURL = ` https://ves-srm-38d575895edb.herokuapp.com`;

const setAuthHeader = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/user/register', values);
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (e) {
      message.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/user/login', values);
      setAuthHeader(response.data.data.accessToken);
      console.log(response.data)
      return response.data;
    } catch (e) {
      message.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/user/logout');
    clearAuthHeader();
    return response.data
  } catch (e) {
    message.error(e.response.data.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/info',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch previous user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/user/info');
      return response.data;

    } catch (e) {
      message.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);