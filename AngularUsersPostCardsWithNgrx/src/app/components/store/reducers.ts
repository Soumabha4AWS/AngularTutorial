import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { UserCardState } from "../models/userState";
import { mockUserCardReducer, realUserCardReducer } from "./reducers/user-card.reducers";

export const reducers: ActionReducerMap<UserCardState> = {
    mockUserCards: mockUserCardReducer,
    realUserCards: realUserCardReducer,
  };


  const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
      console.log('state', state);
      console.log('action', action);  
      return reducer(state, action);
    };
  };


  export const metaReducers: MetaReducer<UserCardState>[] = [debugMeta];