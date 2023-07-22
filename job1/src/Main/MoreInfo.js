
import InfoCard from "../Component/InfoCard";

import styled from "styled-components";

function MoreInfo(){
    return(
        <div align="center">
            <div>
                <h3>해결 방법을 찾지 못했나요?</h3>
                <p>아래 기관에서 전문적인 도움을 받아보세요</p>
            </div>
            <MoreInfoContainer>
                <InfoCard
                    img='/Images/MoreInfo1.png'
                    name='고용노동부 고객 상담 센터'
                    tel='1350'
                />
                <InfoCard
                    img='/Images/MoreInfo2.png'
                    name='직장 내 괴롭힘 상담센터'
                    tel='1522-9000'
                />
                <InfoCard
                    img='/Images/MoreInfo3.png'
                    name='근로 복지 공단'
                    tel='1588-0075'
                />
            </MoreInfoContainer>
        </div>
    )
}

export default MoreInfo;

const MoreInfoContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`