"use client"

import { useEffect, useState } from "react";
import DashboardLayout from "@/app/dashboard/layout";
import Dashboard from "@/app/dashboard/page";
import Header from "@/components/header";
import { getAddress, getForecast } from "@/api";
import { Address, Weather, Location } from "@/types";
import { formatForecastResponse } from "../utils";

export default function Home() {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0
  });
  const [address, setAddress] = useState<Address>({
    addressLine1: '',
    addressLine2: '',
    country: ''
  })
  const [forecast, setForecast] = useState<Weather[]>([]);
  
  useEffect(() => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
        })
    }
  }, []);

  useEffect(() => {
    if (location) {
      getAddress(location)
        .then((d) => setAddress(
          {
            addressLine1: d.address_line1,
            addressLine2: d.address_line2,
            country: d.country
          }
        ))
    }
  }, [location])

  useEffect(() => {
    if (location) {
      getForecast(location)
        .then((res) => res.list.filter((day:{[key:string]:any}, i:number)=>(i === 0 || i % 8 === 0)))
        .then((day) => day.map(formatForecastResponse))
        .then((list) => setForecast(list))
    }
  }, [location])

  return (
    <main className="flex flex-col place-items-center h-full w-screen px-24">
      <form className="self-end mt-12 w-full max-w-[300px]">
          <input className="h-10 w-full p-2 " type="text" placeholder="Any location"/>
      </form>
      <Header address={address} />
      <div>
      <DashboardLayout><Dashboard location={location} forecast={forecast}/></DashboardLayout>
      </div>
    </main>
  )
}
