import { LOADED } from './appActions';

const initialState = {
  loaded: false,
  sidemenu: 'pinned'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADED:
      return { ...state, loaded: true };
    default:
      break;
  }

  return state;
}
