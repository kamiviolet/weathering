import { Weather } from "@/types";
import { WiCloud, WiDaySunny, WiDaySunnyOvercast, WiNa } from "react-icons/wi";

export default function Card({day}: {day:Weather}) {
    const date:string = day.time.split(" ")[0];

    return (
        <section className="grid bg-white/70 rounded-xl h-full p-5 shadow-2xl">
            <div className="pb-5 font-black">{date}</div>
            <div className="flex flex-row py-5 text-8xl justify-center">
                <span>
                    {
                        day.main == "Clouds"
                        ? <WiCloud />
                        : day.main == "Clear"
                        ? <WiDaySunny />
                        : <WiNa />
                    }
                </span>
            </div>
            <div className="grid grid-cols-2">
                <span>Temperature:</span>
                <span>{day.temp} &#176;C</span>
            </div>
            <div className="grid grid-cols-2">
                <span>Feels like:</span>
                <span>{day.feels_like} &#176;C</span>
            </div>
            <div className="grid grid-cols-2">
                <span>Temp range:</span>
                <span>{day.temp_min} &#176;C - {day.temp_max} &#176;C</span>
            </div>
            <div className="grid grid-cols-2">
                <span>Humidity:</span>
                <span>{day.humidity} %</span>
            </div>
            <div className="grid grid-cols-2">
                <span>Wind speed:</span>
                <span>{day.wind_speed} meter/sec</span>
            </div>
        </section>
    )
}