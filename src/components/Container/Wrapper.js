import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: ${props => props.width || "83rem"};
	width: 100%;
	margin: 0 auto;
	@media (max-width: 1367px) {
		padding: 0 2rem;
	}

	@media (max-width: 470px) {
		padding: 0 1.2rem;
	}
`;

export const Flex = styled.div`
	display: flex;
	max-width: 73rem;
	justify-content: space-between;
	margin-top: 10.5rem;
	padding-bottom: 2rem;

	@media (max-width: 830px) {
		justify-content: center;
	}
`;
