const initialState = {
   token:"",
   success:false,
   data:""
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

            case "GETUSERDATA":
                return{
                    ...state,
                    data:action.payload.username
                }


        default : return state 
    }
}