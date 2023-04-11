import React from "react";
import styled from "styled-components/macro";
import { StyledTextLink } from "../Link";

const ImagePreview = () => {
	return (
		<>
			<Grid>
				<Col>
					<ImgBlock mgB />
					<ImgBlock />
				</Col>
				<Col padT>
					<ImgBlock mgB />
					<ImgBlock />
				</Col>
			</Grid>
		</>
	);
};

export const ImagePreviewDetails = () => (
	<Caption>
		Photos by <StyledTextLink>Nnanna Egwu</StyledTextLink>,{" "}
		<StyledTextLink>Oluwamayowa Adeyemi</StyledTextLink>,{" "}
		<StyledTextLink>Arthur Okonkwo</StyledTextLink> and{" "}
		<StyledTextLink>Aderinsola Oluwafemi</StyledTextLink>.
	</Caption>
);

export const ImagePreviewWrap = styled.div`
	@media (max-width: 830px) {
		display: none;
	}
`;

const Grid = styled.div`
	display: inline-grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;

	@media (max-width: 830px) {
		display: none;
	}
`;

const Col = styled.div`
	${props =>
		props.padT &&
		`
      padding-top: 4.75rem;
  `}
`;

const ImgBlock = styled.div`
	width: 15.625rem;
	height: 21.25rem;
	border-radius: var(--radius);
	background-color: #9b9b9b;

	${props =>
		props.mgB &&
		`
    margin-bottom: 1.5rem;
  `}

	@media (max-width: 1063px) {
		width: 10.635rem;
		height: 16.25rem;
	}

	@media (max-width: 830px) {
		display: none;
	}
`;

const Caption = styled.p`
	margin-top: 2rem;
	font-size: var(--font-8);

	@media (max-width: 830px) {
		display: none;
	}
`;

export default ImagePreview;
