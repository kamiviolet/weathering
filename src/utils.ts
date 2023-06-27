import { Weather } from "@/types";

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