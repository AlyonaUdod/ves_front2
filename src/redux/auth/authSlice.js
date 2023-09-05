import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, fetchCurrentUser, register } from './authOperations';

const initialState = {
  user: { name: '', email: '', role: '' },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
  authOperation: null,
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.authOperation = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.authOperation = 'register';
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.authOperation = null;
        state.user = {
          email: payload.email,
          name: payload.name,
          role: payload.role,
        };
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, state => {
        state.authOperation = 'login';
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = {
          email: payload.email,
          name: payload.name,
          role: payload.role,
        };
        state.accessToken = payload.tokens.accessToken;
        state.refreshToken = payload.tokens.refreshToken;
        state.isLoggedIn = true;
        state.authOperation = null;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, state => {
        state.authOperation = 'logout';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isFetching = false;
        state.authOperation = null;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(fetchCurrentUser.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetching = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.authOperation = null;
        state.isFetching = false;
      }),
});

export const authReducer = authSlice.reducer;
