import { useState, useEffect } from "react";
import { post } from "./DataSample";
import Table from "./TestCp";

import "./SearchBar.css"
import Icon from "../Image/Search.png";

function SearchBar(){
    const [query, setQuery] = useState("");
    const keys = ["title", "content"]
    const onChange = (e) => {
        setQuery(e.target.value.toLowerCase());
    }
    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };
    
    return(
        <div className="search-container">
            <img className="search-icon" src={Icon} />
            <input
                className="search-input"
                type="text" 
                value={query}
                onChange={onChange} 
                placeholder="나의 어려움은 무엇인가요?" 
            />
            {/* <Table data={search(post)} /> */}
        </div>
    )
}

export default SearchBar;