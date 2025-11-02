import React, { forwardRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
    className?: string
    image: string | null
}

const AvatarComponent = forwardRef<HTMLDivElement, Props>(({ className, image }, ref) => {
    
    
    return (
        <Avatar ref={ref} onClick={() => console.log("click")} className={` ${className}`} >
            <AvatarImage src={image || ""} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
})

AvatarComponent.displayName = "AvatarComponent"

export default AvatarComponent
