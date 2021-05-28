import { SET_IS_LOADING } from 'src/types/common.type';

const initialState = {
  isLoading: false
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default commonReducer;
