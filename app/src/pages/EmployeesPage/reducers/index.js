import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  isLoading: false,
  users: [],
  errors: null
};

const usersReducer = handleActions(
  {
    [actions.USERS_REQUEST]: state => ({
      ...state,
      isLoading: true
    }),
    [actions.USERS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      users: payload
    }),
    [actions.USERS_ADD]: (state, { payload }) => {
      const id = state.users.length + 1;
      const user = { id, first_name: payload.first, last_name: payload.last };
      return {
        ...state,
        users: [...state.users, user]
      };
    },
    [actions.USERS_REMOVE]: (state, { payload }) => {
      const usersCopy = [...state.users];
      const usersNew = usersCopy.filter(user => user.id !== payload);
      return {
        ...state,
        users: usersNew
      };
    }
  },
  initialState
);

export default usersReducer;
