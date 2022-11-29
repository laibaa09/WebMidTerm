import { useState } from "react";
import Left from "./Left";
function Leftsidebar() {
  const [data,setData] = useState([
    {id:1, team1:{
      Header:"STUMPS",  Name: "England*", overs:"(75 ov)", score: "501/4"
    },
team2:{
    Name :"England Lions"}, dis:"Sindh chose to bat"},
{id:2, team1:{
   Name: "India ", overs:"(73.5)", score:"412/1"},
team2:{
  Header:"INNINGS BREAK", Name : "New Zealand "},
dis:"Central PNJB chose to field"}


]);
    return ( 
      <div>
      <Left
      team={data} sate={setData}
      />
    </div>
     );
}

export default Leftsidebar;