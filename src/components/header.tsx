import { Address } from "@/types";

export default function Header({address}: {address: Address | null}) {
    return (
        <div className="z-20 py-14">
            <h1 className="text-7xl tracking-wider uppercase font-extrabold font-serif text-center leading-loose">
                { address?.country || 'Weathering' }
            </h1>
            <p className="text-xl leading-loose">Interested in knowing the weather in somewhere else? You may want to manually set location in the search engine at the top.</p>
        </div>
    )
}