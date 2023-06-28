"use client"

import { MouseEvent, useEffect, useState } from "react";
import { getAddress, getForecast } from "@/api";
import { Address, Weather, Location, searchResult } from "@/types";
import { formatForecastResponse } from "../utils";
import Dashboard from "@/components/dashboard";
import SearchEngine from "@/components/searchEngine";
import Background from "@/components/background";
import Header from "@/components/header";

export default function Home() {
  const [loadedGPS, setLoadedGPS] = useState<boolean>(false);
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
  const [searchTerm, setSearchTerm] = useState<string>("-");
  const [suggestion, setSuggestion] = useState<searchResult[]>([]);

  useEffect(() => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
            setLoadedGPS(true)
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
        .then(() => setSearchTerm("-"))
    }
  }, [location])

  const cancelDropdown = (e:MouseEvent):void => {
    e.preventDefault();
    const { localName } = e.target as HTMLElement;
    if (localName !== "button") {
      setSuggestion([])
    }
  }

  return (
    <div onClick={e=>cancelDropdown(e)}>
      <nav className="flex flex-row flex-wrap justify-between items-center py-5 px-5 w-screen sticky top-0 z-50 bg-gray-300">
        <p className="text-3xl mr-5">Weathering</p>
        {loadedGPS? <></> : <p>Data loading... Your patience is highly appreciated :) </p>}
        <SearchEngine
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          location={location}
          setLocation={setLocation}
          loadedGPS={loadedGPS}
          suggestion={suggestion}
          setSuggestion={setSuggestion}
        />
      </nav>
      <main className="relative">
        {loadedGPS? <Background address={address} /> : <></>}
        <Header address={address} />
        <Dashboard forecast={forecast}/>
      </main>
    </div>
  )
}
