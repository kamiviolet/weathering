import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import { Address } from "@/types";
import { getBackground } from "@/api"

export default function Background({address}: {address: Address}) {
    const [backgroundURL, setBackgroundURL] = useState<string>(``);

    useLayoutEffect(() => {
        if (address.country) {
          getBackground(address.city || address.country)
            .then((d) => setBackgroundURL(d?.urls.regular))
        }
      }, [address])

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-50 w-screen sm:h-full bg-white/50">
            {
                backgroundURL
                ? <Image
                    src={backgroundURL}
                    fill={true}
                    alt={address.city||address.country}                 
                    className="object-cover bg-fixed mix-blend-plus-lighter"/>
                : <></>
            }
        </div>
    )
}