import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (type) => {
  const instance = axios.create({
    baseURL:"",
    withCredentials: false,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':true },
  })
    const [data, setData] = useState(null);
  
    useEffect(() => {
      switch(type){
        case "ping":
          instance.get("/ping").then(res=>setData(res))
          break
        case "getGames":
          instance.get("/getGamesByDate",{params:{date:date}}).then(res=>setGames(res.data))
          break
        case "postPrediction":
          break
      }
    }, [type]);
    {console.log("render useFetch")}
    return [data];
  };
  
  export default useFetch;