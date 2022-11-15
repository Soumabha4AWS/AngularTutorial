import { createReducer, on } from "@ngrx/store";    
import { increment, decrement, reset } from "./counter.action";
import { initialState } from "./counter.state";                                                                                    



export function counterReducer(state: any, action: any) {
    return createReducer(initialState, 
        on(increment, (state) => {
            console.log('inside increment of counterReducer');
        return {
                ...state,
                counter: state.counter+1,
                };
            }),
        on(decrement, (state) => {
            console.log('inside decrement of counterReducer');
            return {
                ...state,
                counter: state.counter-1,
                };
            }),
        on(reset, (state) => {
            console.log('inside reset of counterReducer');
            return {
                ...state,
                counter: 0,
                };
            }),                
        )
}