import { Weather } from "@/types";
import { WiCloud, WiDaySunny, WiDaySunnyOvercast, WiNa } from "react-icons/wi";

export default function Card({day}: {day:Weather}) {
    const date:string = day.time.split(" ")[0];

    return (
        <section className="grid bg-white/70 rounded-xl h-full p-3 shadow-2xl">
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
            <div className="grid grid-cols-2 md:grid-cols-1">
                <span className="line-clamp-1 font-bold">Temperature:</span>
                <span className="text-right">{day.temp} &#176;C</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
                <span className="line-clamp-1 font-bold">Feels like:</span>
                <span className="text-right">{day.feels_like} &#176;C</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
                <span className="line-clamp-1 font-bold">Temp range:</span>
                <span className="text-right">{day.temp_min} &#176;C - {day.temp_max} &#176;C</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
                <span className="line-clamp-1 font-bold">Humidity:</span>
                <span className="text-right">{day.humidity} %</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
                <span className="line-clamp-1 font-bold">Wind speed:</span>
                <span className="text-right">{day.wind_speed} meter/sec</span>
            </div>
        </section>
    )
}