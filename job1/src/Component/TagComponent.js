import React, {useState} from 'react'
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagImage = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 1.875rem;
  background: ${({selected}) => (selected ? '#87AE86' : 'none')};
  box-shadow: ${({selected}) => (selected ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset' : 'none')};
  cursor: pointer;
`;

const TagText = styled.p`
  width: 7.25rem;
  height: 1.5rem;
  flex-shrink: 0;
  text-align: center;
  font-family: DM Sans;
  font-size: 1rem;
  font-style: normal;
  color: ${({selected}) => (selected ? '#174D16' : '#000')};
  font-weight: ${({selected}) => (selected ? '700' : '400')};
  line-height: 1.125rem;
`;

export default function TagComponent({imageUrl, alt, text, selected, onClick}){
  return (
    <TagContainer>
      <TagImage 
        src={imageUrl} 
        alt={alt}
        selected={selected}
        onClick={onClick}
      />
      <TagText selected={selected} onClick={onClick}>
        {text}
      </TagText>
    </TagContainer>
  );
}