import Card from "@/components/card";
import { Weather} from "@/types";

export default function Dashboard({forecast} : {forecast: Weather[]}) {
  
  return (
    <section className="grid grid-cols-1 justify-items-stretch items-center w-screen bg-slate-500 h-full overflow-y-auto overflow-x-hidden my-5 p-12 gap-5 backdrop-blur md:grid-cols-5 md:bg-slate-400/50">
      {
        forecast.map((day) => {
          return <Card key={day.dt} day={day} />
        })
      }
    </section>      
  )
  }