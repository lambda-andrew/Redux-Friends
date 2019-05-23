import {FETCH_DATA_START, FETCH_DATA_SUCCESS} from "../actions";

const initalState = {
    error: "",
    fetchingData: false,
    friends: [],
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingData: true,
                error: "",
            };
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                fetchingData: false,
                friends: action.payload
            }
        }
        default: 
            return state; 
    }
}

export default reducer;