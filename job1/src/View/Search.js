
import { useParams } from "react-router-dom/dist";
import SearchBar from "../Component/SearchBar";
import Tag from "../Component/Tag";

import styled from 'styled-components';

function Search(){
    const { query, tag } = useParams();
    return(
        <SearchContainer>
            <h2>나의 Job을 슬기롭게 일구다</h2>
            <p>취업 준비, 혹은 직장 생활 중의 고민거리나 어려움을 나누고 현명하게 해결하세요</p>
            <SearchBar />
            <Tag />
        </SearchContainer>
    )
}

export default Search;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`