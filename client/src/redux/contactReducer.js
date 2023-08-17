import {GET_CONTACTS} from "./actionType"
const initState={
    contacts:[]
}

export const contactReducer=(state=initState,action)=>{
switch(action.type){
    case GET_CONTACTS:
        return{
            ...state,
            contacts:action.payload
        };
        default:
            return state
}
}