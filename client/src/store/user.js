import {createSlice} from '@reduxjs/toolkit';
import globalConstants from '../constants/globalConstants';
import http from '../api/httpService';
import api from '../api/routes';
import routes from '../routes.json';
import firebase from 'firebase';
import {toast} from 'react-toastify';

// Slice
const jwt = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loggedIn: jwt ? true : false,
    loading: false,
    error: '',
    errors: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.errors = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loggedIn = false;
      state.loading = false;
      state.errors = true;
    },

    request: (state, action) => {
      state.loading = true;
      state.error = '';
      state.error = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  loginSuccess,
  loginError,
  logoutSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
  resetPasswordSuccess,
  resetPasswordError,
  request,
} = slice.actions;

export const login = data => async dispatch => {
  try {
  } catch (e) {}
};
