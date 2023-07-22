import React, { useState } from 'react';
import hamburger from '../assests/hamburger.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/store/toggleSlice';
import SearchContainer from './SearchContainer';
import { useSearchParams } from 'react-router-dom';
import useSearch from '../utils/useSearch';
import { useNavigate } from 'react-router-dom';
import search from '../assests/search.png';

const Header = () => {
    const [searchQuery, setsearchQuery, searchdata] = useSearch();
    const [showsetsuggestion, setshowsetsuggestion] = useState(false);
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [searchparams, setsearchparams] = useSearchParams();
    const showsearchres = searchparams.get('search');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handletoggle = () => {
        dispatch(toggleMenu());
    };

    const handleSearchButtonClick = () => {
        setIsSearchClicked(true);
        navigate('/');
        setsearchparams({ search: searchQuery });
        setsearchQuery([]);
    };

    return (
        <>
            <div className="flex py-4 px-3 shadow-md justify-between items-center">
                <div className="flex items-center">
                    <img
                        onClick={() => handletoggle()}
                        className="pl-5 cursor-pointer"
                        src={hamburger}
                        alt="menu"
                    />
                    <img
                        width={150}
                        className="px-5 cursor-pointer"
                        src="https://www.youtube.com/img/desktop/supported_browsers/yt_logo_rgb_light.png"
                        alt="youtube-icon"
                    />
                </div>

                <div className="w-full md:w-[60rem] flex justify-center md:ml-10">
                    <input
                        className="bg-gray-200 lg:w-96 w-28 py-1 rounded-lg px-3"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setsearchQuery(e.target.value)}
                        onFocus={() => setshowsetsuggestion(true)}
                        onBlur={() => {
                            setTimeout(() => {
                                setshowsetsuggestion(false);
                            }, 200);
                        }}
                    />
                    <button className="px-2" onClick={handleSearchButtonClick}>
                        <img width={20} src={search} alt="search-icon" />
                    </button>
                </div>

                <div>
                    <img
                        width={30}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
                        alt="user-profile"
                    />
                </div>
            </div>

            <div className='flex justify-center lg:ml-40 ml-0'>
                {showsetsuggestion && (
                    <div className="mx-auto bg-slate-100 absolute w-96 px-2 rounded-xl h-auto ">
                        {searchdata.map((s) => {
                            return (
                                <SearchContainer
                                    data={s}
                                    searchQuery={searchQuery}
                                    setsearchQuery={setsearchQuery}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
