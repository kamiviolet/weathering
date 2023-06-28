"use client"

import { useEffect, useState } from "react";
import { getAddress, getForecast } from "@/api";
import { Address, Weather, Location } from "@/types";
import { formatForecastResponse } from "../utils";
import Dashboard from "@/components/dashboard";
import SearchEngine from "@/components/searchEngine";
import Background from "@/components/background";
import Header from "@/components/header";

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
    getAddress(location)
      .then((d) => setAddress(
        {
          addressLine1: d.address_line1,
          addressLine2: d.address_line2,
          city: d.city,
          country: d.country
        }
      ))
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
    <>
      <nav className="flex flex-row justify-between py-5 px-5 w-screen sticky top-0 z-50 bg-gray-400">
        <p className="text-3xl pr-5">Weathering</p>
        <SearchEngine location={location} setLocation={setLocation} />
      </nav>
      <main className="relative">
        <Background address={address} />
        <Header address={address} />
        <Dashboard forecast={forecast}/>
      </main>
    </>
  )
}
