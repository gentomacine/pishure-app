import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import { Wrapper } from "../../components/Container/Wrapper";
import BottomNav from "../../components/ButtonGroup";
import SelectImage from "./SelectImage";
import UploadImageForm from "./UploadImageForm";
import { HeaderText } from "../../components/Header";
import LeftSideNav from "../../components/Header/LeftSideNav";
import Logo from "../../components/Logo";
import { useFilehandler } from "../../hooks/useFilehandler";


const Upload = () => {
	// const [file, setFile] = useState(null);
	// const [imageSizeError, setImageSizeError] = useState("");

	// const handleFile = e => {
	// 	const image = e.target.files[0];
	// 	let idealSize = 4;
	// 	if (image.size > idealSize * 1024 * 1024) {
	// 		setImageSizeError("Image should not be greater than 4mb");
	// 		setTimeout(() => setImageSizeError(""), 2000);
	// 		return;
	// 	}
	// 	setFile(image);
	// };


	const {imageSizeError, file, handleDrop, handleFile, setFile} = useFilehandler()

	// const handleDrop = e => {
	// 	e.preventDefault();
	// 	const image =
	// 		e.dataTransfer.items[0].getAsFile() || e.dataTransfer.files[0];
	// 	let idealSize = 4;
	// 	if (image.size > idealSize * 1024 * 1024) {
	// 		setImageSizeError("Image should not be greater than 4mb");
	// 		setTimeout(() => setImageSizeError(""), 2000);
	// 		return;
	// 	}
	// 	setFile(image);
	// };

	return (
		<>
			<Wrapper>
				<Header>
					<LeftSideNav />
					<Title>Submit Photos</Title>
					<StyledLink>Need help?</StyledLink>
				</Header>
			</Wrapper>

			{imageSizeError && <ErrorBanner>{imageSizeError}</ErrorBanner>}

			{file ? (
				<UploadImageForm imgFile={file} setFile={setFile}/>
			) : (
				<SelectImage handleFile={handleFile} handleDrop={handleDrop} />
			)}

			<BottomNav file={file} />
		</>
	);
};

const Title = styled(HeaderText)`
	font-weight: 500;
	font-size: 1.25rem;
`;

const StyledLink = styled(Link)`
	color: var(--white);
	text-decoration: underline;
`;

const ErrorBanner = styled.div`
	width: 40rem;
	left: 50%;
	transform: translateX(-50%);
	background: var(--white);
	padding: 0.3rem 0;
	color: var(--pishure-red);
	top: 5rem;
	position: absolute;
	text-align: center;
	border-radius: var(--radius);
	font-size: 1rem;
`;

export default Upload;
