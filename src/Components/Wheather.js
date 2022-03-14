import React, { useEffect, useState } from "react";
import "../Style/Wheather.css";


const Wheather=()=>{
 const [data,setdata]=useState('');
 const [Fulldata,setFulldata]=useState('');
 const [name,setname]=useState('');

 const [temp,settemp]=useState('');
 const [min,setmin]=useState('');
 const [max,setmax]=useState('');
 const [wet,setwet]=useState('');

 const change=(event)=>{
     setdata(event.target.value);
   

 }
 

 const click=()=>{
    setFulldata(data);
    setdata("")
   
 }
 

  const Fetch_Data=async()=>{
     const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Fulldata}&units=metric&appid=8d441b35b8b536ce7bba5e8de37d127c`);
     const result=await response.json();
     console.log(result);
     setname(result.name);
     settemp(result.main.temp);
     setmin(result.main.temp_min);
     setmax(result.main.temp_max);
     setwet(result.weather[0].main);

  }
  useEffect(()=>{
      Fetch_Data();
  },[Fulldata]);

 

return(<>
<center>
 <div className="outer">
<div>
    <input className="data" type="text" placeholder=" Enter Your Place " onChange={change} value={data} />
    <span className="serach"><i  class="fas fa-search" onClick={click}></i></span>
</div>


<span className="location"><i  class="fas fa-map-marker-alt"  ></i></span><h1 className="title" >{name}</h1>
<h2 className="wet">{wet}</h2>
<div className="inner"> 
    <h2 className="degree" >{temp}°C</h2><br/>
    <p className ="min-max" >min:{min}°C | max:{max}°C</p>

</div>


</div>
</center>

</>
);

}
export default Wheather;