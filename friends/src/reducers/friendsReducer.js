import { 
  FETCHING_FRIENDS, 
  SUCCESS_GETTING_FRIENDS, 
  ADD_FRIEND_START, 
  ADD_FRIEND_SUCCESS, 
  ADD_FRIEND_FAILURE
} from '../actions'

const initialState = {
   friends: [],
   fetching: false,
   error: '',
   addingFriend: false,
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
            friends: action.payload,
            fetching: false
          }
        case ADD_FRIEND_START: 
          return {
            ...state,
            addingFriend: true
          }
        case ADD_FRIEND_SUCCESS:
          return {
            ...state,
            addingFriend: false,
            error: '',
            friends: action.payload
            };
        case ADD_FRIEND_FAILURE:
          return {
            error: action.payload
          }
        default:
          return state;
      }
}