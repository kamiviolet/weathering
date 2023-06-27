import { Address } from "@/types";

export default function Header({address}: {address: Address | null}) {
    return (
        <div className="my-10">
            <h1 className="text-6xl small-caps text-center pt-[3em] pb-[1em]">
                { address?.country || 'Weathering' }
            </h1>
            {
                address
                ? <></>
                : <p>Interested in knowing the weather in somewhere else? You may want to manually set location in the search engine at the top.</p>
            }
        </div>
    )
}