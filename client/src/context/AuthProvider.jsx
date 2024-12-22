import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const savedUser = localStorage.getItem('loginUser');
        if(savedUser){
            setUser(JSON.parse(savedUser));
        }
    },[])

    const loginUser = (user) => {
        setUser(user);
        localStorage.setItem('loginUser', JSON.stringify(user))
    }

    const logoutUser = ()=>{
        setUser(null);
        localStorage.removeItem('loginUser')
    };


  return (
    <div>
      <AuthContext.Provider value={{user,loginUser,logoutUser}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
