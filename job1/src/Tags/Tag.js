import React from 'react';
import TagComponent from '../Component/TagComponent';
import styled from 'styled-components';

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Tag(){
    const tagsData = [
        { id: 1, text: '취업', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 2, text: '실업 / 퇴직', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 3, text: '보험', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 4, text: '임금', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 5, text: '복리후생', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 6, text: '직장 내 괴롭힘', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" },
        { id: 7, text: '취약계층', imageUrl: "https://www.welfarenews.net/news/photo/201308/39442_166729_151.jpg", alt: "관련이미지" }
    ];

    return (
        <TagsContainer>
            {tagsData.map((tag) => 
                <TagComponent 
                    key={tag.id} 
                    text={tag.text} 
                    imageUrl={tag.imageUrl} 
                    alt={tag.alt}
                />
            )}
        </TagsContainer>
    )
}