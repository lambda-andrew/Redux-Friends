import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE, FRIENDS_SUCCESS, FRIENDS_FAILURE, FRIENDS_START } from '../actions';

const initialState = {
  isLoggedIn: false,
  deletingFriend: false,
  fetchingFriends: false,
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null,
  friends: [{
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  }],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'Login Failed'
      }

    case FRIENDS_SUCCESS:
      console.log("FRIENDS_SUCCESS reducer", action);
      return {
        ...state,
        fetchingFriends: false,

        friends: [...state.friends, 
                  // action.payload is an array, so needs to be spread out or else array will be nested
                  ...action.payload]
      }
    case FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      }
    case FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: 'Not Friends'
      }
    default:
      return state;
  }
}


export default reducer;
