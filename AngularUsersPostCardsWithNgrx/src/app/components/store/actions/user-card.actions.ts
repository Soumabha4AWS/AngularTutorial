import { createAction, props } from "@ngrx/store";
import { User } from '../../models/user';
import { UserClass } from "../../models/userClass";

export const getUserCard = createAction('[UserCard] Get UserCard');
export const getUserCardSuccess = createAction('[UserCard] Get UserCard Success', (users: ReadonlyArray<User>)=> ({users}));
// export const getUserCardSuccess = createAction('[UserCard] Get UserCard Success', props<{users : ReadonlyArray<User>}>());


export const addUserCard = createAction('[UserCard] Add UserCard', props<{user: User}>());
export const addUserCardSuccess = createAction('[UserCard] Add UserCard Success');