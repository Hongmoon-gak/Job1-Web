
import styled from "styled-components";

function Footer(){
    return(
        <FooterContainer>
            <FooterText>Copyrights © 잡일 | All Rights Reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`
const FooterText=styled.p`
    color: var(--neutral-colors-text-gray, #9795B5);
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
`