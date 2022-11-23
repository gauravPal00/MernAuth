const initialState = {
   token:"",
   success:false,
}

export const LoginReducers = (state=initialState,action)=>{
    switch(action.type){

        case "LOGINTOKEN":
            let {token,success} = action.payload
        
            return{
                ...state,
                token: token,
                success:success
            }

            case "LOGOUTUSER":
                return{
                    ...state,
                    token:"",
                }
        default : return state 
    }
}