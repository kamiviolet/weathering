import { Address } from "@/types";
import { useState, useEffect } from "react";
import { getBackground } from "@/api"

export default function Background({address}: {address: Address}) {
    const [backgroundURL, setBackgroundURL] = useState<string>(``);

    useEffect(() => {
        if (address.country) {
          getBackground(address.country)
            .then((d) => setBackgroundURL(d?.urls.regular))
        }
      }, [address])

    return (
        <div
            className="absolute bg-fixed top-0 bottom-0 left-0 right-0 z-0 bg-cover bg-white/30 bg-blend-lighten"
            style={
                backgroundURL
                ? {backgroundImage: `url(${backgroundURL})`}
                : {}
            }>
        </div>
    )
}