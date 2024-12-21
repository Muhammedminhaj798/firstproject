import React, { createContext, useEffect, useState } from "react";  
import axios from "axios";
export const userContext = createContext();
function UserContext({ children }) {

const [datas,setDatas]=useState([])



  useEffect(()=>{
    const featch = async()=>{
      const response =await axios.get('http://localhost:3000/user')
      console.log(response.data);
      setDatas(response.data)
    
    }
    featch()
  },[])
  console.log("datas",datas);



  // console.log("datas",datas);
  return (
    <div>
      <userContext.Provider value={{ datas }}>
        {children}
      </userContext.Provider>
    </div>
  );
}

export default UserContext