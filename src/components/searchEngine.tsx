import { Location, searchResult } from "@/types";
import { getAutocomplete } from "@/api";
import { FormEvent, useEffect, useState } from "react";
import { formatSuggestion, getUniqueSuggestion } from "@/utils";
import { SuggestionDropdown } from "./suggestionDropdown";

export default function SearchEngine({location, setLocation}: {
    location: Location,
    setLocation: (location: Location) => void
}) {
    const [searchTerm, setSearchTerm] = useState<string>("-");
    const [suggestion, setSuggestion] = useState<searchResult[]>([]);

    const handleSearch = (e:FormEvent):void => {
        e.preventDefault();
    };

    useEffect(() => {
        getAutocomplete(searchTerm)
            .then((data) => data?.features)
            .then((features) => features? formatSuggestion(features) : "")
            .then((list) => list? getUniqueSuggestion(list) : "")
            .then((result) => result? setSuggestion(result) : "")
    }, [searchTerm])

    return (
        <form className="relative" onSubmit={(e)=>handleSearch(e)}>
            <input
                className="h-10 w-[250px] p-2 capitalize"
                type="text"
                value={searchTerm === "-"? "" : searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="&#x1F50E; Please enter any location"
            />
            {
                suggestion?.length
                ? <SuggestionDropdown
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setLocation={setLocation}
                    location={location}
                    suggestion={suggestion}
                />
                : <></>
            }
        </form>
    )
}