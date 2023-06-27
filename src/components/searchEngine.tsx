import { Location } from "@/types";
import { BsSearch } from "react-icons/bs";

export default function SearchEngine({location, setLocation}: {location: Location, setLocation: (location: Location) => void}) {
    return (
        <form className="absolute right-0 top-0 m-10 max-w-[300px] z-20">
            <input
                className="h-10 w-full p-2"
                type="text"
                placeholder="&#x1F50E; Please enter any location"
            />
        </form>
    )
}