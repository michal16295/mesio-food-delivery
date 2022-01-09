import {createSlice} from '@reduxjs/toolkit';
import globalConstants from '../constants/globalConstants';
import http from '../api/httpService';
import api from '../api/routes';
import Toast from 'react-native-toast-message';

// Slice
const jwt = null;
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

    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.loggedIn = false;
      state.loading = false;
      state.errors = false;
    },
    registerError: (state, action) => {
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
const {loginSuccess, loginError, registerSuccess, registerError, request} =
  slice.actions;

export const login = data => async dispatch => {
  try {
  } catch (e) {}
};

export const register = data => async dispatch => {
  try {
    dispatch(request());
    console.log(data);
    await http.post(api.REGISTER, data);
  } catch (e) {
    console.log(e);
    Toast.show({type: 'error', text1: e.message});
    Toast.show({
      type: 'error',
      text1: e.response?.data?.error,
    });
  }
};
