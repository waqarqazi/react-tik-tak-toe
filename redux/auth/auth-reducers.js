import { AuthState } from './auth-states';
import * as Actions from './constants';

const INITIAL_STATE = new AuthState();

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.LOGIN: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }
    case Actions.LOGOUT: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }

    case Actions.FORGOT_PASSWORD: {
      return {
        ...state,
        userForgotPassword: action.payload,
      };
    }

    case Actions.RESET_PASSWORD: {
      return {
        ...state,
        userResetPassword: action.payload,
      };
    }

    default:
      return state;
  }
}
