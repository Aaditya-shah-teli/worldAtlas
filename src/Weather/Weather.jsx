import React, { useEffect, useState } from "react";

export const Weather = () => {
    const [date, setDate] = useState(0);
    useEffect(()=>{
        setInterval(() => {
            const newDate = new Date();
            setDate(newDate.toLocaleTimeString());
            
        }, 1000);  
       
    },[])
  return (<>
  <h2>Date {date}</h2>
  </>)}; 
  