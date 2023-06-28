import { Address } from "@/types";
import { useState, useLayoutEffect } from "react";
import { getBackground } from "@/api"

export default function Background({address}: {address: Address}) {
    const [backgroundURL, setBackgroundURL] = useState<string>(``);

    useLayoutEffect(() => {
        if (address.country) {
          getBackground(address.country)
            .then((d) => setBackgroundURL(d?.urls.regular))
        }
      }, [address])

    return (
        <div
            className="absolute top-0 bottom-0 left-0 right-0 -z-50 bg-cover bg-bottom h-screen bg-fixed bg-slate-500/50 bg-blend-lighten"
            style={
                backgroundURL
                ? {backgroundImage: `url(${backgroundURL})`}
                : {}
            }>
        </div>
    )
}