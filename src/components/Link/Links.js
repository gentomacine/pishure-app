import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
	color: var(--white);
	font-size: ${props => props.fontSize};
`;

export const StyledTextLink = styled.a`
	color: var(--white);
	text-decoration: underline var(--white);
	font-size: ${props => props.fontSize};
`;
