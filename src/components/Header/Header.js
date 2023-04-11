import React from "react";
import styled from "styled-components";

const Header = ({ children, ...restProps }) => {
	return (
		<Nav {...restProps}>
			<Container>{children}</Container>
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	background-color: var(--black-900);
`;

export const HeaderText = styled.p`
	@media (max-width: 470px) {
		display: none;
	}
`;

export const HeaderInner = styled.div`
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 83rem;
	margin: 0 auto;
	width: 100%;
	height: 6.25rem;
	font-size: 0.875rem;

	@media (max-width: 1364px) {
		padding: 0 2rem;
	}

	@media (max-width: 470px) {
		padding: 0 1.2rem;
	}
`;

export default Header;
