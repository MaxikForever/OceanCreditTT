import { createReducer, on } from "@ngrx/store";
import { initialState } from "./userData.state";
import { removeUserData, saveUserData } from "./userData.actions";
import { UserData } from "../../interfaces/user-data";


export const _userDataReducer = createReducer(
    initialState,

    on(saveUserData, (state, { email, password }) => {
      return {
        ...state,
        email: email,
        password: password
      };
    }),

    on(removeUserData, state => {
      return {
        ...state,
        email: '',
        password: ''
      };
    })
  );


export function userDataReducer(state: UserData | undefined, action: any) {
    return _userDataReducer(state, action);
  }