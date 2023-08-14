import styled from "styled-components";

function WriteHeader() {
	return (
		<Wrapper>
			<H>동료 일꾼들에게 당신의 고민을 털어놓으세요</H>
			<P>동료 일꾼들과 고민거리를 나누고, 좋은 해결책을 들어보세요 </P>
		</Wrapper>
	)
}

export default WriteHeader;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 14.4375rem;
	background: #F0F4F0;
`
const H = styled.h1`
	color: #000;
	text-align: center;
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: DM Sans;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 700;
`
const P = styled.p`
	color: var(--my-dark-green, #174D16);
	text-align: center;
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: DM Sans;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
`