import { useState, useEffect } from "react";

function SearchBar(){
    const [search, setSearch] = useState("");
    const onChange=(e)=>{
        setSearch(e.target.value);
    }
    
    return(
        <div>
            <input type="text" value={search} onChange={onChange} placeholder="나의 어려움은 무엇인가요?" />
        </div>
    )
}

export default SearchBar;