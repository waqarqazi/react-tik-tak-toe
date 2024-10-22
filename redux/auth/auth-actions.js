import * as Actions from './constants';

export const setUserReduxLogin = (item) => ({
  type: Actions.LOGIN,
  payload: item,
});


export const setUserReduxSignUp = (item) => ({
  type: Actions.SIGNUP,
  payload: item,
});



export const setUserForgotPassword = (item) => ({
  type: Actions.FORGOT_PASSWORD,
  payload: item,
});

export const setUserResetPassword = (item) => ({
  type: Actions.RESET_PASSWORD,
  payload: item,
});

export const setUserReduxLogout = (item) => ({
  type: Actions.LOGOUT,
  payload: item,
});
