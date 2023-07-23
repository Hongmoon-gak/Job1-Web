
import styled from "styled-components";
import { Link } from "react-router-dom";

function InfoCard(props){
    return(
        <Card>
            <InfoLink to={props.url} target="_blank">
                <Img src={props.img} alt={props.name} />
                <Text>
                    <Institution>{props.name}</Institution>
                    <Tel href='tel:{props.tel}' >☎️ Tel: {props.tel}</Tel>
                </Text>
            </InfoLink>
        </Card>
    )
}

export default InfoCard;

const Card=styled.div`
    width: 16.1875rem;
    height: 22.6875rem;
    margin: 2rem;
    flex-shrink: 0;
    border-radius: 1.5rem;
    background: var(--neutral-colors-white, #FFF);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
`

const InfoLink=styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Text=styled.div`
    padding-left: 1.5rem;
    text-align: left;
`

const Institution=styled.p`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
`

const Img=styled.img`
    margin-top: 1.5rem;
`

const Tel=styled.a`
    text-decoration: none;
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
`