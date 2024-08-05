import { ActionType } from "../action-types";

interface LoaderState {
  loading: boolean;
}

const intialState: LoaderState = {
  loading: false,
};

const loaderReducer = (
  state = intialState,
  action: { type: ActionType.SHOW_LOADER | ActionType.HIDE_LOADER }
): LoaderState => {
  switch (action.type) {
    case ActionType.SHOW_LOADER:
      return { ...state, loading: true };
    case ActionType.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loaderReducer;
