import { FETCHING_FRIENDS, SUCCESS_GETTING_FRIENDS } from '../actions'

const initialState = {
   friends: [],
   fetching: false,
   error: '',
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
        default:
          return state;
      }
}