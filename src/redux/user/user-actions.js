import { userService } from 'services/users';
import * as Actions from './constants';

export const getUserReduxData = () => async (dispatch) => {
  const response = await userService.checkAuth();
  dispatch({
    type: Actions.SET_USER_DATA,
    payload: response.data,
  });
};
export const setUserReduxData = (item) => ({
  type: Actions.SET_USER_DATA,
  payload: item,
});
