export const getUser=()=>{
    const userStr=sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
}
export const getToken=()=>{
    return sessionStorage.getItem("token")|| null;

}
export const getType=()=>{
    return sessionStorage.getItem("type")|| null;
}
export const setUserSession=(token,user,type)=>{
    sessionStorage.setItem("token",token);
     sessionStorage.setItem("user",user);
     sessionStorage.setItem("type",type);
}
export const removeUserSession=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}