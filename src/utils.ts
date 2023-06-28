import { Weather, searchResult } from "@/types";

export function formatForecastResponse(day:{[key:string]:any}, i:number):(Weather|undefined) {
  const clone = {
    dt: day.dt,
    main: day.weather[0].main,
    temp: convertKevinToCelcius(day.main.temp),
    feels_like: convertKevinToCelcius(day.main.feels_like),
    temp_min: convertKevinToCelcius(day.main.temp_min),
    temp_max: convertKevinToCelcius(day.main.temp_max),
    humidity: day.main.humidity,
    wind_speed: day.wind.speed,
    time: day.dt_txt
  }
  return clone;
}

export function convertKevinToCelcius(degree: number):number {
  return +(degree -  273.15).toFixed(2);
}

export function formatSuggestion(list: searchResult[]):searchResult[] {
  return list.map(result => {
    const formatted = {
      city: result.properties.city,
      country: result.properties.country,
      place_id: result.properties.place_id,
      latitude: result.properties.lat,
      longitude: result.properties.lon,
    }
    return formatted;
  })
}

export function getUniqueSuggestion(list: searchResult[]):searchResult[] {
  const uniqueList = list.reduce(
    (arr:searchResult[], curr:searchResult)=>{
      if (list.filter(c => (c.city === curr.city)).length === 1 && curr.city) {
        arr.push(curr)
      }
      return arr;
    }, [])
  return uniqueList;
}