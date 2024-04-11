import { createAction, props } from "@ngrx/store";
import { UserData } from "../../interfaces/user-data";

export const saveUserData = createAction(
    '[User] Save User Data',
    props<UserData>()
);

export const removeUserData = createAction('[User] Remove User Data');