import React from "react";

import useFetch from "../service/useFetch";
export default function FormComp(){
    const [data] = useFetch("ping")
    return(
        <form>
        <label >Description </label>
        
        {/* <select onClick={()=>{console.log("me apretaste")}} name="" id="">
           {games.map(game=>{<option>{game.teams.home.name} vs {game.teams.away.name}</option>})} 
        </select> */
        console.log("hola")
        }
         </form>
    )
}