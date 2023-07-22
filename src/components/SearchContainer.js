import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import search from '../assests/search.png'

const SearchContainer = ({ data, searchQuery, setsearchQuery }) => {
    const navigate = useNavigate()
    const [searchparams, setsearchparams] = useSearchParams()

    const handleSearchButtonClick = () => {
        navigate('/');
        setsearchQuery(data);
        setsearchparams({ search: data })
    };

    return (
        <div onClick={handleSearchButtonClick} className='cursor-pointer hover:bg-slate-300 py-1 rounded-sm flex px-4 items-center'>
            <img
                className='w-[20px] h-[20px] '
                src={search}
                alt='search-icon'
            />
            <span className='ml-3'>{data}</span>
        </div>
    )
}

export default SearchContainer