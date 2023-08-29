import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom/dist';
import TagComponent, { PostTagComponent } from './TagComponent';
import styled from 'styled-components';
import tagsData from './TagsData';

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem;
`;

export default function Tag(props){
  const [selectedImageIndex, setSelectedImageIndex] = useState(props.tag);
  const navigate = useNavigate();
  const getQuery = new URL(window.location.href).searchParams.get("query");
  const getTag = new URL(window.location.href).searchParams.get("tag");
  const [query, setQuery] = useState(getQuery || "");
  
  useEffect(() => { // useEffect 훅을 통해 selectedImageIndex 값이 변할 때마다 setQuery실행
    setQuery(getQuery || "");
  }, [selectedImageIndex, getQuery]);
  
  useEffect(() => {
    if (getTag !== null) {
      setSelectedImageIndex(Number(getTag));
    }
  }, []);

  const handleImageClick = (index) => {
    if (index === selectedImageIndex){
      setSelectedImageIndex(null);
      navigate(`/search?query=${query}&tag=${null}`)
    }
    else{
      setSelectedImageIndex(index);
      navigate(`/search?query=${query}&tag=${index}`)
    }
  }
  
  return (
    <TagsContainer>
      {tagsData.map((tag, index) => (
        <PostTagComponent
          key={tag.id} 
          text={tag.text} 
          imageUrl={tag.imageUrl} 
          alt={tag.alt}
          selected={selectedImageIndex === index}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </TagsContainer>
  )
}