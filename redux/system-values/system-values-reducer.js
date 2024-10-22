import { SystemValuesState } from './system-values-states';
import * as Actions from './constants';
import { sortAlphabetically } from 'utils/helpers';

const INITIAL_STATE = new SystemValuesState();

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    //SET Actions basically fetch
    case Actions.SET_PRACTICE_GROUPS: {
      return {
        ...state,
        practiceGroups: sortAlphabetically(action.payload, 'practiceGroup'),
      };
    }

    case Actions.SET_LOCATIONS: {
      return {
        ...state,
        locations: sortAlphabetically(action.payload, 'location'),
      };
    }

    case Actions.SET_WEIGHTS: {
      return {
        ...state,
        weights: action.payload,
      };
    }

    case Actions.SET_STATES: {
      return {
        ...state,
        states: sortAlphabetically(action.payload, 'barState'),
      };
    }

    //Add Actions
    case Actions.ADD_LOCATION: {
      return {
        ...state,
        locations: sortAlphabetically(
          [...state.locations, action.payload],
          'location'
        ),
      };
    }

    case Actions.ADD_PRACTICE_GROUP: {
      return {
        ...state,
        practiceGroups: sortAlphabetically(
          [...state.practiceGroups, action.payload],
          'practiceGroup'
        ),
      };
    }

    case Actions.ADD_STATE: {
      return {
        ...state,
        states: sortAlphabetically(
          [...state.states, action.payload],
          'barState'
        ),
      };
    }

    // Update Actions
    case Actions.UPDATE_PRACTICE_GROUP: {
      return {
        ...state,
        practiceGroups: sortAlphabetically(
          state.practiceGroups.map((element) =>
            element._id === action.payload._id ? action.payload : element
          ),
          'practiceGroup'
        ),
      };
    }

    case Actions.UPDATE_STATE: {
      return {
        ...state,
        states: sortAlphabetically(
          state.states.map((element) =>
            element._id === action.payload._id ? action.payload : element
          ),
          'barState'
        ),
      };
    }

    case Actions.UPDATE_LOCATION: {
      return {
        ...state,
        locations: sortAlphabetically(
          state.locations.map((element) =>
            element._id === action.payload._id ? action.payload : element
          ),
          'location'
        ),
      };
    }

    case Actions.UPDATE_WEIGHT: {
      return {
        ...state,
        weights: {
          ...action.payload,
        },
      };
    }

    //Delete Actions
    case Actions.DELETE_LOCATION: {
      const newArr = [...state.locations];
      const indexFound = newArr.findIndex(
        (element) => element._id === action.payload
      );
      if (indexFound >= 0) {
        newArr.splice(indexFound, 1);
      }
      return {
        ...state,
        locations: newArr,
      };
    }

    case Actions.DELETE_PRACTICE_GROUP: {
      const newArr = [...state.practiceGroups];
      const indexFound = newArr.findIndex(
        (element) => element._id === action.payload
      );
      if (indexFound >= 0) {
        newArr.splice(indexFound, 1);
      }
      return {
        ...state,
        practiceGroups: newArr,
      };
    }

    case Actions.DELETE_STATE: {
      const newArr = [...state.states];
      const indexFound = newArr.findIndex(
        (element) => element._id === action.payload
      );
      if (indexFound >= 0) {
        newArr.splice(indexFound, 1);
      }
      return {
        ...state,
        states: newArr,
      };
    }

    default:
      return state;
  }
}
