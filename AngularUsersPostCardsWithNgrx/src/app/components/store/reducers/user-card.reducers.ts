import { state } from "@angular/animations";
import { createReducer, on, State} from "@ngrx/store";
import { UserClass } from "../../models/userClass";
import { UserCardState } from "../../models/userState";
import { getUserCard, getUserCardSuccess } from "../actions/user-card.actions";


const initialState: UserClass[] = [];

export const mockUserCardReducer = createReducer(
    initialState,
    on(getUserCard, (state): UserClass[]=> [...mockUsers()])    
    );


export const realUserCardReducer = createReducer(
    initialState,
    on(getUserCardSuccess, (state, {users}) => [...users])    
    );    

function mockUsers(): UserClass[] {

      const user1 = new UserClass(1,'Shubham','simply.shubham@gmail.com');
      const user2 = new UserClass(2,'Tathagata','simply.tatha@gmail.com');
      const user3 = new UserClass(3,'Sohini','simply.sohini@gmail.com');
      const user4 = new UserClass(4,'Sayantani','simply.sayantani@gmail.com');
      const user5 = new UserClass(4,'Tirthankar','simply.thirtha@gmail.com');

      const userClasses = [user1, user2, user3, user4, user5];
      return userClasses;

      }    



