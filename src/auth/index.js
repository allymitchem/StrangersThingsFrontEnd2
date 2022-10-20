export function StoreCurrentUser(user){
    localStorage.setItem('token', token)
}

// export const removeToken = () => {
//     localStorage.removeItem("token")
    
// }

export function getCurrentUser(){
    const user = JSON.parse(localStorage.getItem('token'))
}