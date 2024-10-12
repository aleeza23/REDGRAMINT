import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (keyword.trim()) {
            navigate(`/products?name=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <div>
            <form>
                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        id="search_field"
                        placeholder="Enter Product Name ..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button
                        id="search_btn"
                        type="button"
                        onClick={handleSearch}
                    >
                        <FaSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
