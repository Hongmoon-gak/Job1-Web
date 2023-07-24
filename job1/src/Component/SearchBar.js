import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "./DataSample";
import Table from "./TestCp";

import "./SearchBar.css"

function SearchBar(){
    const [query, setQuery] = useState("");
    const keys = ["title", "content"];
    const onChange = (e) => {
        setQuery(e.target.value.toLowerCase());
    }
    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };

    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        // 검색 결과 시 이동할 url (임시로 지정)
        navigate(`/search?query=${encodeURIComponent(query)}`);
        console.log(query);
    }
    
    return(
        <form className="search-container" onSubmit={submit} >
            <img className="search-icon" src='/Images/Search.png' alt="search icon" />
            <input
                className="search-input"
                type="text" 
                value={query}
                onChange={onChange}
                placeholder="나의 어려움은 무엇인가요?" 
            />
            {/* <Table data={search(post)} /> */}
        </form>
    )
}

export default SearchBar;