import { MouseEvent } from "react";
import { searchResult, Location } from "@/types";

export function SuggestionDropdown({suggestion, setLocation, searchTerm, setSearchTerm}:
    {   
        suggestion: searchResult[],
        searchTerm:string,
        setLocation: (location:Location) => void,
        setSearchTerm: (searchTerm:string) => void
    }) {
    const handleSelect = (e:MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const target = (e.target as HTMLButtonElement).value;
        const details:Location = JSON.parse(target)
        console.log(suggestion)
        
        if (details) {
            setSearchTerm(details.city||searchTerm)
            setLocation({
                latitude: details.latitude,
                longitude: details.longitude
            });
        } else {
            alert('Sorry for inconvenience. Something is wrong. Would you mind to try again?')
        }
    } 

    return (
        <div className="w-[250px] h-full absolute top-10 right-0">
        {
            suggestion.map((s)=>{
                return (
                    <button
                        onClick={(e)=>handleSelect(e)}
                        value={JSON.stringify({latitude: s.latitude, longitude: s.longitude, city: s.city})}
                        className="h-auto w-full p-2 grid grid-cols-2 justify-items-start text-left bg-slate-200 hover:bg-orange-300 focus:bg-orange-300 shadow-xl z-30"
                        key={s.place_id}
                    >
                        {s.city}
                        <span className="justify-self-end text-xs text-slate-700">{s.country}</span>
                    </button>
                )
            })
        }
        </div>
    )
}