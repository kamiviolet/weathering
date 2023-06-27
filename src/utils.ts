import { Weather } from "@/types";

export function formatForecastResponse(day:{[key:string]:any}, i:number):(Weather|undefined) {
  const clone = {
    main: day.weather[0].main,
    temp: day.main.temp,
    feels_like: day.main.feels_like,
    temp_min: day.main.temp_min,
    temp_max: day.main.temp_max,
    humidity: day.main.humidity,
    wind_speed: day.wind.speed,
    time: day.dt_txt
  }
  return clone;
}