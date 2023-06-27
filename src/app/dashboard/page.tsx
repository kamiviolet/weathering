import Card from "@/components/card";
import { Location, Weather } from "@/types";

export default function Dashboard({location, forecast} : {location: Location, forecast: Weather[]}) {
  
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-5 justify-items-stretch items-center w-full h-auto p-10 gap-10 backdrop-blur bg-slate-400/50">
      {
        forecast.map((day) => {
          return <Card key={day.dt} day={day} />
        })
      }
    </div>
  )
  }