import { SET_IS_LOADING } from 'src/types/common.type';

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading
  };
};
