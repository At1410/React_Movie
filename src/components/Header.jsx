import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
    const [textSearch, setTextSearch] = useState("");

    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[40px] uppercase font-bold text-pink-600">Movie With AT</h1>
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-2 text-black rounded-md"
                    onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
                <button className="p-2 text-white bg-pink-600 rounded-md"
                    onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </div>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func,
}

export default Header;