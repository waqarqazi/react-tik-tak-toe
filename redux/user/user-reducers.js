import { UserState } from './user-state';
import * as Actions from './constants';

const INITIAL_STATE = new UserState();

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
}
