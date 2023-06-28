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
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-50 w-screen lg:h-screen sm:h-full md:h-full bg-white/50">
            {
                backgroundURL
                ? <img
                    src={backgroundURL}
                    className="object-cover bg-fixed w-full h-full mix-blend-plus-lighter"/>
                : <></>
            }
        </div>
    )
}