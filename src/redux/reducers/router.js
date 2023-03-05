import { LOCATION_CHANGED } from '../constants';

const initialState = {
  router: '',
};

const router = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_CHANGED:
      return {
        ...state,
        router: payload,
      };
    default:
      return state;
  }
};

export default router;
