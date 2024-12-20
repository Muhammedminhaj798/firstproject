import React, { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";
import axios from "axios";
export const userContext = createContext();
function Context({ children }) {
  const { data } = useFetch("http://localhost:3000/product");
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
      <userContext.Provider value={{ data,datas }}>
        {children}
      </userContext.Provider>
    </div>
  );
}

export default Context;
