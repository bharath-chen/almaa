import { ActionType } from "../action-types";

export const showLoader = () => ({ type: ActionType.SHOW_LOADER });

export const hideLoader = () => ({ type: ActionType.HIDE_LOADER });
