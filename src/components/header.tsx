import { Address } from "@/types";

export default function Header({address}: {address: Address}) {
    return (
        <header className="py-10 px-5">
            <h1 className="text-6xl tracking-wider uppercase font-extrabold font-serif text-center hyphens-auto leading-loose">
                { address.city || 'Weathering' }
            </h1>
            <h2 className="text-4xl tracking-wider uppercase font-extrabold font-serif text-center hyphens-auto leading-regular pb-10">
                { address?.country || "" }
            </h2>
            <p className="text-xl text-center leading-loose">
                Interested in knowing the weather in somewhere else?<br/>
                You may want to manually set location in the search engine at the top.
            </p>
        </header>
    )
}