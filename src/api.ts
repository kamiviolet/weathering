import axios from "axios";
import { Location } from "@/types"

export function getForecast(location: Location) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.OPENWEATHER_API}`)
        .then(({data}) => data)
        .catch((error:Error) => console.warn(error))
}

export function getAddress(location: Location) {
    return axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.latitude}&lon=${location.longitude}&apiKey=${process.env.GEOAPIFY_API}`)
        .then(({data}) => data.features[0].properties)
        .catch((error:Error) => console.warn(error))
}

export function getBackground(city?: string) {
    return axios.get(`https://api.unsplash.com/photos/random?topics=${city},city&orientation=landscape&client_id=${process.env.UPSPLASH_API}`)
        .then(({data}) => data)
        .catch((error:Error) => console.warn(error))
}

export function getAutocomplete(letters: null|undefined|string) {
    return axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${letters}&apiKey=${process.env.GEOAPIFY_API}`)
        .then(({data}) => data)
        .catch((error:Error) => console.warn(error))
}