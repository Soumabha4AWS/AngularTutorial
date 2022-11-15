import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ApiService } from "../../services/api.service";
import { getUserCard, getUserCardSuccess } from "../actions/user-card.actions";


@Injectable()
export class userCardEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe( 
                        ofType(getUserCard), exhaustMap(
                            () => this.apiService.getAllPost().pipe(
                                map(users => getUserCardSuccess(users))
                                )
                            )
                        )
            
);

    constructor(private actions$: Actions, private apiService: ApiService) {}

}


