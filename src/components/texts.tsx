import {Inconsolata} from "next/font/google"

const inconsolota = Inconsolata({
    subsets:['latin']
})

type props ={
    text : string,
    className : string,
}

export function SmallText({text,className}:props){


    return(
        <h4 className={`${inconsolota.className} ${className} text-lg`} >{text}</h4>
    )
}

export function LargeText({text,className}:props){


    return(
        <h4 className={`${inconsolota.className} ${className} text-xl `} >{text}</h4>
    )
}