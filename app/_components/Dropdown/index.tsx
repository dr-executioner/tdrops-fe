import { ReactNode } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Item, MenuItem } from '@/types/twitch.type'

type Props = {
    children: ReactNode
    dropDownItems: Item[]
}

const Dropdown = ({ children, dropDownItems }: Props) => {

    const router = useRouter()
    const handleClick = (item: Item) => {
        console.log(item)
        if (item.action) {
            item.action()
        }
        // if (item.path) {
        //     router.push(item.path)
        // }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align="start">
                {dropDownItems.map((item: Item) => (
                    <DropdownMenuItem key={item.id} onClick={() => handleClick(item)}>
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown