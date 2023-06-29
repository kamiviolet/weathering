import Card from "@/components/card";
import { Weather} from "@/types";
import { useEffect, useRef, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function Dashboard({forecast} : {forecast: Weather[]}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<{direction: string, time: number}>({
    direction: "",
    time: 0
})

  useEffect(()=>{
    const {current} = sliderRef;

    if (current) {
      if (side.direction === "left") {
        current.scrollLeft -= (window.innerWidth - 50)
      } else {
        current.scrollLeft += (window.innerWidth - 50)
      }
    }
  }, [side])

  return (
    <section className="relative flex my-5 backdrop-blur bg-slate-400/50">
      <BsFillCaretLeftFill
        className="absolute top-1/2 left-0 text-6xl cursor-pointer text-slate-800/50 hover:text-slate-900 hidden sm:block"
        onClick={()=>{setSide({direction: "left", time: side.time++})}}
      />
      <BsFillCaretRightFill
        className="absolute top-1/2 right-0 text-6xl cursor-pointer text-slate-800/50 hover:text-slate-900 hidden sm:block"
        onClick={()=>{setSide({direction: "right", time: side.time++})}}
      />
      <div className="flex flex-col sm:flex-row h-full w-full overflow-x-auto scroll-smooth snap-start scroll-snap-stop: always scroll-my-5" ref={sliderRef} >
        {
          forecast.map((day) => {
            return <Card key={day.dt} day={day} />
          })
        }
      </div>
    </section>      
  )
  }