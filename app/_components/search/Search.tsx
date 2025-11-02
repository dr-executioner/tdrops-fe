"use client"
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useSearch } from '@/context/SearchContext'
import { useState, useMemo } from 'react'
import { fetchTwitchStreamers } from '@/pages/api/twitch/twitch'
import { debounce } from '@/lib/utils'

type Props = {}

const Search = (props: Props) => {
    const { dispatch } = useSearch()
    const [query, setQuery] = useState("")

    const debouncedSearch = useMemo(() => debounce(async (value: string) => {
        if (!value) return
        dispatch({ type: "SET_SEARCH", payload: value })
        const results = await fetchTwitchStreamers(value)
        console.log(results)
    }, 350), [dispatch])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQuery(value)
        debouncedSearch(value)
    }

    return (
        <div className='font-semibold font-mono rounded-full px-3 py-1.5 flex items-center min-w-sm w-xl border-2'>
            <SearchIcon />
            <Input
                value={query}
                onChange={handleChange}
                placeholder='Search Twitch streamers...'
                autoComplete='off'
            />
        </div>
    )
}

export default Search
