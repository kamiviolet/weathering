export type WeatherSource = {
  [key: string]: any
}

export type Location = {
  latitude: number,
  longitude: number,
  city?: string,
}

export type Address = {
  addressLine1: string,
  addressLine2: string,
  city?: string,
  country: string,
}

export type Weather = {
    main: string,
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
    wind_speed: number,
    time: string,
    [key:string]: any,
  }

export type searchResult = {
  city: string,
  country: string,
  place_id: number,
  latitude: number,
  longitude: number,
  [key:string]: any,
}