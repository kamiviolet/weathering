import { Location, Weather } from "@/types";

export default function Dashboard({location, forecast} : {location: Location, forecast: Weather[]}) {
  
  return (
    <>
      <div className="grid grid-cols-5 gap-10">
          <p>Monday</p><p>Tuesday</p><p>Wednesday</p><p>Thursday</p><p>Friday</p>
      </div>
    </>
    )
  }