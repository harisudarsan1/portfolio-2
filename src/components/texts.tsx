import {Inconsolata} from "next/font/google"

const inconsolota = Inconsolata({
    subsets:['latin']
})

type props ={
    text : string,
    className? : string,
}

export function SmallText({text,className}:props){


    return(
        <h1 className={`${inconsolota.className} ${className} text-lg lg:text-xl`} >{text}</h1>
    )
}

export function LargeText({text,className}:props){


    return(
        <h2 className={`${inconsolota.className} ${className} font-bold text-xl md:text-2xl lg:text-3xl `} >{text}</h2>
    )
}

export function SmallerText({text,className}:props){


    return(
        <p className={`${inconsolota.className} ${className}text-base md:text-lg lg:text-xl `} >{text}</p>
    )
}