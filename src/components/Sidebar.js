import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const toggleMenu = useSelector(store => store.app.isopen);
    if (!toggleMenu) return null;

    return (
        <div
            className="m-2 p-2 lg:relative absolute top-10 left-0 h-screen bg-white  z-10"
        // Use "absolute" positioning and adjust z-index to display the sidebar over the content
        >
            <ul>
                <Link to={'/'}>
                    <li className="my-2 cursor-pointer">Home</li>
                </Link>
                <li className="my-2 cursor-pointer">Short</li>
                <li className="my-2 cursor-pointer">Subscriptions</li>
                <hr className="my-2" />
                <li className="my-2 cursor-pointer">Library</li>
                <li className="my-2 cursor-pointer">History</li>
                <li className="my-2 cursor-pointer">Watch Later</li>
            </ul>
        </div>
    );
};

export default Sidebar;
