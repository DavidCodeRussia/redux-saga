import { SET_POPULAR_NEWS_ERROR, SET_LATEST_NEWS_ERROR } from '../constants';

const initialState = {
  latestNewsError: '',
  popularNewsError: '',
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POPULAR_NEWS_ERROR:
      return {
        ...state,
        popularNewsError: payload,
      };
    case SET_LATEST_NEWS_ERROR:
      return {
        ...state,
        latestNewsError: payload,
      };
    default:
      return state;
  }
};

export default errors;
