import { Weather } from "@/types";
import { WiCloud, WiDaySunny, WiDaySunnyOvercast, WiNa } from "react-icons/wi";

export default function Card({day}: {day:Weather}) {
    const date:string = day.time.split(" ")[0];
    const time:string = day.time.split(" ")[1];

    return (
        <section className="flex shrink-0 flex-col bg-white/70 rounded-xl h-full p-5 mx-8 mb-10 w-56">
            <div className="grid grid-cols-2">
                <p className="font-black">{date}</p>
                <p className="text-right text-base">{time}</p>
            </div>
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
                <span className="line-clamp-1 font-bold">Temperature:</span>
                <span className="text-right">{day.temp} &#176;C</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="line-clamp-1 font-bold">Feels like:</span>
                <span className="text-right">{day.feels_like} &#176;C</span>
            </div>
            <div className="grid grid-flow-col auto-cols-auto">
                <span className="line-clamp-1 font-bold">Range:</span>
                <span className="text-right">{day.temp_min} - {day.temp_max} &#176;C</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="line-clamp-1 font-bold">Humidity:</span>
                <span className="text-right">{day.humidity} %</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="line-clamp-1 font-bold">Wind speed:</span>
                <span className="text-right">{day.wind_speed} m/s</span>
            </div>
        </section>
    )
}