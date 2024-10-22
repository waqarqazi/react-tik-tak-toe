import { createNotification } from 'components/react-notification';
import { systemValuesService } from 'services/system-values';
import * as Actions from './constants';

export const setLocations = () => {
  return async (dispatch) => {
    const response = await systemValuesService.getSystemLocations({});
    dispatch({
      type: Actions.SET_LOCATIONS,
      payload: response.data.locations,
    });
    return {
      type: Actions.SET_LOCATIONS,
      payload: response.data.locations,
    };
  };
};

export const setPracticeGroups = () => {
  return async (dispatch) => {
    const response = await systemValuesService.getSystemPracticeGroups({});
    dispatch({
      type: Actions.SET_PRACTICE_GROUPS,
      payload: response.data.practiceGroups,
    });
    return {
      type: Actions.SET_PRACTICE_GROUPS,
      payload: response.data.practiceGroups,
    };
  };
};

export const setStates = () => {
  return async (dispatch) => {
    const response = await systemValuesService.getSystemBarStates({});
    dispatch({
      type: Actions.SET_STATES,
      payload: response.data.barStates,
    });
    return {
      type: Actions.SET_STATES,
      payload: response.data.barStates,
    };
  };
};

export const setWeights = () => {
  return async (dispatch) => {
    const response = await systemValuesService.getSystemWeights({});
    dispatch({
      type: Actions.SET_WEIGHTS,
      payload: response.data.systemWeights,
    });
    return {
      type: Actions.SET_WEIGHTS,
      payload: response.data.systemWeights,
    };
  };
};

export const updateLocations = (item, id) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemLocations(item, id);
    dispatch({
      type: Actions.UPDATE_LOCATION,
      payload: response.data.status,
    });
  };
};

export const updatePracticeGroup = (item, id) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemPracticeGroups(
      item,
      id
    );
    dispatch({
      type: Actions.UPDATE_PRACTICE_GROUP,
      payload: response.data.practice,
    });
  };
};

export const updateState = (item, id) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemBarStates(item, id);
    dispatch({
      type: Actions.UPDATE_STATE,
      payload: response.data.bar,
    });
  };
};

export const updateWeight = (weights, weightId) => {
  return async (dispatch) => {
    const response = await systemValuesService.editAlgoWeights(
      weightId,
      weights
    );
    createNotification('success', 'Success', response?.data?.message, 3500);
    dispatch({
      type: Actions.UPDATE_WEIGHT,
      payload: response.data.systemWeight,
    });
  };
};

export const deleteLocation = (id) => {
  return async (dispatch) => {
    await systemValuesService.deleteSystemLocation(id);
    dispatch({
      type: Actions.DELETE_LOCATION,
      payload: id,
    });
  };
};

export const deletePracticeGroup = (id) => {
  return async (dispatch) => {
    await systemValuesService.deleteSystemPracticeGroups(id);
    dispatch({
      type: Actions.DELETE_PRACTICE_GROUP,
      payload: id,
    });
  };
};

export const deleteState = (id) => {
  return async (dispatch) => {
    await systemValuesService.deleteSystemBarStates(id);
    dispatch({
      type: Actions.DELETE_STATE,
      payload: id,
    });
  };
};

export const addLocation = (item) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemLocations(item);
    dispatch({
      type: Actions.ADD_LOCATION,
      payload: response.data.location,
    });
  };
};

export const addPracticeGroup = (item) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemPracticeGroups(item);
    dispatch({
      type: Actions.ADD_PRACTICE_GROUP,
      payload: response.data.practiceGroup,
    });
  };
};

export const addState = (item) => {
  return async (dispatch) => {
    const response = await systemValuesService.addSystemBarStates(item);
    dispatch({
      type: Actions.ADD_STATE,
      payload: response.data.barState,
    });
  };
};
