import React, { useEffect, useState } from 'react';

const campaighn = () => {
  const [campaigns, setcampaign]= useState([])
  useEffect(()=>{
    fetch("/donation.json")
    .then((res)=>res.json())
    .then((data)=>setcampaign(data))
  },[])
  return{campaigns}
};

export default campaighn;