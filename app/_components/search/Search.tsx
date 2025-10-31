"use client"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { useSearch } from '@/context/SearchContext'
import { useState } from 'react'
import { fetchTwitchStreamers } from '@/pages/api/twitch/twitch'

type Props = {}

const Search = (props: Props) => {
    const { dispatch } = useSearch()
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setQuery(value)
    }

    async function handleSearch() {
        dispatch({ type: "SET_SEARCH", payload: query })
        const results = await fetchTwitchStreamers(query);
        setData(results)
        // dispatch({ type: "SET_RESULTS", payload: results });
    }
    return (
        <div className='rounded-full px-4 py-2 flex items-center min-w-sm w-xl border-2'>
            <SearchIcon />
            <Input className='border-none' onChange={handleChange} />
            <Button onClick={handleSearch}>Search</Button>

            {JSON.stringify(data)}
        </div>
    )
}

export default Search