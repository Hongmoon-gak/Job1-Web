
import styled from "styled-components";

function InfoCard(props){
    return(
        <Card>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <a href='tel:{props.tel}' >Tel: {props.tel}</a>
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