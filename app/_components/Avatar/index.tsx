import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {
    image: string | null
}

const AvatarComponent = ({ image }: Props) => {
    return (
        <Avatar className='h-12 w-12'>
            <AvatarImage src={image || ""} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default AvatarComponent