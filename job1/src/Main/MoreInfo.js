
import InfoCard from "../Component/InfoCard";

import styled from "styled-components";

function MoreInfo(){
    return(
        <MoreInfoContainer>
            <InfoText>
                <InfoTitle>해결 방법을 찾지 못했나요?</InfoTitle>
                <InfoContent>아래 기관에서 전문적인 도움을 받아보세요</InfoContent>
            </InfoText>
            <MoreInfoCardContainer>
                <InfoCard
                    img='/Images/MoreInfo1.png'
                    name='고용노동부 고객 상담 센터'
                    tel='1350'
                    url='https://1350.moel.go.kr/home/'
                />
                <InfoCard
                    img='/Images/MoreInfo2.png'
                    name='직장 내 괴롭힘 상담센터'
                    tel='1522-9000'
                    url='https://www.moel.go.kr/common/downloadFile.do?file_seq=20230101624&bbs_seq=20230101072&bbs_id=29'
                />
                <InfoCard
                    img='/Images/MoreInfo3.png'
                    name='근로 복지 공단'
                    tel='1588-0075'
                    url='https://www.comwel.or.kr/'
                />
            </MoreInfoCardContainer>
        </MoreInfoContainer>
    )
}

export default MoreInfo;

const MoreInfoContainer=styled.div`
    text-align: center;
    padding: 4rem;
    margin: 8rem 0 0 0;
    background: #E4EEE3;
`

const InfoText=styled.div``

const InfoTitle=styled.h3`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
`

const InfoContent=styled.p`
    color: var(--my-dark-green, #174D16);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
`

const MoreInfoCardContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`