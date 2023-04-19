import { ADD_USER, NOT_EMAIL, CONFIRM_EMAIL, EXIT } from "./actions";

const initialState = { 
    user:{
        name:"Sonne Global",
        email:"user@sonne.global"
    },
    emailConfirmed: null
}; 

export default function userReducer(state = initialState, action) { 
    switch (action.type) { 
        case CONFIRM_EMAIL:
            return { ...state, emailConfirmed: true };
        case NOT_EMAIL:
            return { ...state, emailConfirmed: false }
        case ADD_USER:
            return { 
                ...state, 
                user: action.payload,
                emailConfirmed: true
            };
        case EXIT:
            console.log("Not confirm email" + state.emailConfirmed)
            return { ...state, user: initialState.user, emailConfirmed: null }
        default: 
            return state; 
    }
}