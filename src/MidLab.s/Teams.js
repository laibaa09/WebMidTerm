import { useState } from "react";
import RightSidebar from "./Rightsidebar.js";
function Teams() {
    const [data,setData] = useState([
        {id:1, team1:{
            Name: "Sindh*", overs:"(75 ov)", score: "222/4"
        },
    team2:{
        Name :"Balochistan "}, dis:"Sindh chose to bat"},
    {id:2, team1:{
        Name: "Southern Punjab (Pakistan)*", overs:"(73.5)", score:"324/1"},
team2:{
    Name : "Central Punjab (Pakistan) "},
dis:"Central PNJB chose to field"},
{id:3, team1:{
    Name: "Northen (Pakistan)", score:"234/2" , overs: "(2 ov)"},
team2:{
Name : "Khyber Pakhtunkhwa*"
}, dis:"Khyber Trail by 210 runs"
}

    ])
    return ( 
        <div>
          <RightSidebar
          team={data} sate={setData}
          />
        </div>
     );

    }
export default Teams;