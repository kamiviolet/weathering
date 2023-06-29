import { FormEvent, useEffect } from "react";
import { Location, searchResult } from "@/types";
import { getAutocomplete } from "@/api";
import { formatSuggestion, getUniqueSuggestion } from "@/utils";
import { SuggestionDropdown } from "./suggestionDropdown";

export default function SearchEngine({location, setLocation, searchTerm, setSearchTerm, loadedGPS, suggestion, setSuggestion}: {
    location: Location,
    searchTerm: string,
    suggestion: searchResult[],
    setSuggestion: (suggestion: searchResult[]) => void,
    setLocation: (location: Location) => void,
    setSearchTerm: (searchTerm:string) => void,
    loadedGPS: boolean
}) {
    const handleSearch = (e:FormEvent):void => {
        e.preventDefault();
        const result:searchResult|undefined = suggestion.find(result => result.city === searchTerm);
        
        if (result) {
            setLocation({
                latitude: result.latitude,
                longitude: result.longitude
            })
        } else {
            alert(`No result is found. Would you be more specific or pick any suggestions provided?`)
        }
    };

    useEffect(() => {
        getAutocomplete(searchTerm)
            .then((data) => data?.features)
            .then((features) => features? formatSuggestion(features) : "")
            .then((list) => list? getUniqueSuggestion(list) : "")
            .then((result) => result? setSuggestion(result) : "")
    }, [searchTerm])

    return (
        <form className="relative mr-5 my-2 text-black" onSubmit={(e)=>handleSearch(e)}>
            <input
                className="h-10 w-[250px] p-2 capitalize"
                type="text"
                value={searchTerm === "-"? "" : searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="&#x1F50E; Please enter any location"
                disabled={loadedGPS? false:true}
            />
            {
                suggestion?.length
                ? <SuggestionDropdown
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setLocation={setLocation}
                    suggestion={suggestion}
                />
                : <></>
            }
        </form>
    )
}