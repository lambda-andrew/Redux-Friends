import { FETCHING_FRIENDS, SUCCESS_GETTING_FRIENDS, FAILURE_GETTING_FRIENDS } from '../actions'

const initialState = {
   friends: [],
  };

  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
          return {
            ...state,
            error: '',
            fetching: true,
          }
        case SUCCESS_GETTING_FRIENDS:
          return {
            ...state,
            error: '',
            characters: action.payload,
            fetching: false
          }
        case FAILURE_GETTING_FRIENDS:
          return {
            ...state,
            fetching: false,
            error: action.payload
          }
        default:
          return state;
      }
}