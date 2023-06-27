"use client"

import { useEffect, useState } from "react";
import DashboardLayout from "@/app/dashboard/layout";
import Dashboard from "@/app/dashboard/page";
import Header from "@/components/header";
import Background from "@/components/background";
import { getAddress, getForecast } from "@/api";
import { Address, Weather, Location } from "@/types";
import { formatForecastResponse } from "../utils";
import SearchEngine from "@/components/searchEngine";

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
          country: d.country
        }
      ))
  }, [location])

  useEffect(() => {
    if (location) {
      getForecast(location)
        .then((res) => res.list.filter((day:{[key:string]:any}, i:number)=>(i === 0 || i % 8 === 0)))
        .then((day) => {
          console.log(day)
          return day.map(formatForecastResponse)
        })
        .then((list) => setForecast(list))
    }
  }, [location])

  return (
    <main className="h-full w-screen">
      <Background address={address} />
      <section className="flex flex-col h-screen justify-center items-center px-20 py-10">
        <SearchEngine location={location} setLocation={setLocation} />
        <Header address={address} />
        <DashboardLayout><Dashboard location={location} forecast={forecast}/></DashboardLayout>
      </section>
    </main>
  )
}
