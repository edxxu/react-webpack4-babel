import { handleActions } from 'redux-actions';
import * as actions from './actions';
import { HomePageState } from '../../models/HomePageState';

const initState: HomePageState = {
  count: 0,
};

const reducer = handleActions(
  {
    [actions.increment.toString()]: (state: HomePageState) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    [actions.decrement.toString()]: (state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
  initState
);

export default reducer;
