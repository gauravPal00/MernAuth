export const loginData = (data)=>{
    return{
        type:"LOGINTOKEN",
        payload:data
    }
}

export const logoutUser = ()=>{
    return{
        type:"LOGOUTUSER"
    }
}

export const getData = (data)=>{
    return{
        type:"GETUSERDATA",
        payload:data
    }
} 

export const tokenError = ()=>{
    return{
        type:"ERRORHANLDER",
    }
}