import { Weather } from "@/types";
import { WiCloud, WiRain, WiDaySunny, WiNightClear, WiNightCloudy, WiDaySunnyOvercast, WiNa } from "react-icons/wi";

export default function Card({day}: {day:Weather}) {
    const formattedDay:string = 
        new Date(day.time).toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute:"2-digit",
            hour12: true
        });
    const weekday:string = formattedDay.split(", ")[0];
    const date:string = formattedDay.split(", ")[1];
    const time:string = formattedDay.split(", ")[2];
    const daytime:boolean =
        parseInt(day.time.split(" ")[1]) >= 6
        &&
        parseInt(day.time.split(" ")[1]) < 18;
        
    return (
        <section
            className={
                daytime
                ? "bg-sky-400/30 grid grid-cols-2 sm:grid-cols-1 shrink-0 p-5 sm:mb-16 h-full w-full sm:w-64"
                : "bg-blue-800/30 grid grid-cols-2 sm:grid-cols-1 shrink-0 p-5 sm:mb-16 h-full w-full sm:w-64"
            }
        >
            <div className="col-start-1 col-span-2 row-start-1 grid grid-cols-2">
                <p className="font-black">
                    {date}
                </p>
                <p className="text-right text-base">
                    {weekday}
                </p>
            </div>
            <div className="col-start-2 row-start-2 sm:col-start-1 sm:row-start-2 flex flex-col pt-7 pb-3 text-9xl justify-center items-center">
                <p className="text-center text-base">
                    {time}
                </p>
                <span>
                    {
                        day.main === "Clouds" && daytime
                        ? <WiCloud />
                        : day.main === "Clouds"
                        ? <WiNightCloudy />
                        : day.main === "Clear" && daytime
                        ? <WiDaySunny />
                        : day.main === "Clear"
                        ? <WiNightClear />
                        : day.main === "Rain"
                        ? <WiRain />
                        : <WiNa />
                    }
                </span>
            </div>
            <div className="col-start-1 row-start-2 sm:row-start-3 flex flex-col item-center justify-center">
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
            </div>
        </section>
    )
}