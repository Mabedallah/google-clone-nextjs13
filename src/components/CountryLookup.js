"use client"

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("US");
  console.log(process.env.NEXT_PUBLIC_IP_ADDRESS);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_IP_ADDRESS}`)
    .then((res)=>res.json())
    .then((data)=>setCountry(data.country_name));
  }, []);  
  return (
    <div>{country}</div>
  )
}
