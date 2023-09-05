import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';


export const getPersons = createAsyncThunk(
  'persons/getPersons',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/persons');
      return response.data;
    } catch (e) {
      message.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPerson = createAsyncThunk(
  'persons/addPerson',
  async (values, thunkAPI) => {
    try {
      console.log(values)
      const response = await axios.post('/persons', values);
      message.success('Person successfully added!')
      return response.data.person;
    } catch (e) {
      message.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
