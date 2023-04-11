import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../../assets/full-logo.svg";
import mobileLogo from "../../assets/color-logo.svg"
import styled from "styled-components";

const Logo = () => {
	return (
		<>
			<Link to='/'>
				<LogoImage src={logoSrc} alt='Pishure' />
			</Link>
			<Link to='/'>
				<MobileLogo src={mobileLogo} alt='Pishure' />
			</Link>
		</>
	);
};

const LogoImage = styled.img`
	object-fit: cover;
	display: block;

	@media (max-width: 470px) {
		display: none;
	}
`;

const MobileLogo = styled.img`
	display: none;
	@media (max-width: 470px) {
	object-fit: cover;
	display: block;
	}
`;

export default Logo;
