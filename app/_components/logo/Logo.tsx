import Image from 'next/image'
import React from 'react'

type Props = {
    type: "white" | "purple",
    size: number
}

const Logo = ({ type, size }: Props) => {
    return (
        <div>
            {type === "purple" ? (
                <Image src="/Dropr_purple.png" height={size} width={size} alt="logo_purple" />
            ) : (
                <Image src="/Dropr_white.png" height={size} width={size} alt="logo_white" />
            )}
        </div>
    )
}

export default Logo
