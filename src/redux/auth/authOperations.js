import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

axios.defaults.baseURL = `https://ves-back.onrender.com/api`;
// axios.defaults.baseURL = `http://localhost:3001/api`

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
      const { data } = await axios.post('/user/register', values);
      setAuthHeader(data.tokens.accessToken);
      return data;
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
      const { data } = await axios.post('/user/login', values);
      setAuthHeader(data.tokens.accessToken);
      return data;
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
      const { data } = await axios.get('/user/info');
      return data;

    } catch (e) {
      if (e.response.status === 401) {
        // thunkAPI.dispatch(refreshToken())
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const refreshToken = createAsyncThunk('auth/refresh',
//   async (_, thunkAPI) => {
    // console.log('so this')
    // const state = thunkAPI.getState();

    // const refreshToken = state.auth.refreshToken;
    // console.log(refreshToken)
    // if (refreshToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch previous user');
    // }
    // try {
    //   const response = await axios.post('/user/refresh', {});
    //   console.log(response)
    //   return response.data;

    // } catch (e) {
    //   message.error(e.response.data.message);
    //   return thunkAPI.rejectWithValue(e.message);
    // }
// })