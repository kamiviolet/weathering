export type WeatherSource = {
  [key: string]: any
}

export type Location = {
  latitude: number,
  longitude: number
}

export type Address = {
  addressLine1: string,
  addressLine2: string,
  country: string,
}

export type Weather = {
    main: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    wind_speed: number;
    time: string;
    [key:string]: any;
  };