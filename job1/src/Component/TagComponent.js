import React from 'react'
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
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(24, 39, 75, 0.12);

`;

const TagText = styled.p`
    width: 7.25rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
`;

export default function TagComponent({imageUrl, alt, text}){
    return (
    <TagContainer>
        <TagImage src={imageUrl} alt={alt}/>
        <TagText>{text}</TagText>
    </TagContainer>
    )
}