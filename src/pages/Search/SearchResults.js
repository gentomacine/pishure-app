import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { InputField } from "../../components/FormGroup";
import { Wrapper } from "../../components/Container/Wrapper";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo";
import { NavSideContent } from "../../components/Header";
import camera from "../../assets/icon-camera.svg";
import TagGroup from "./TagGroup";
import ImageGrid from "../../components/ImageGrid";
import TagsSlider from "../../components/slider/Slider";

const tabs = [
	"Lifestyle",
	"Happy",
	"Model",
	"Woman",
	"Fashion",
	"Black and White",
	"Woman Smiling",
];

const SearchResults = () => {
	return (
		<Wrapper>
			<Header>
				<Div>
					<Logo />
					<NavSearchBar />
				</Div>
				<NavSideContent />
			</Header>
			<Container>
				<SidebarContent>
					<Headline2 style={{ marginBottom: "40px" }}>
						Filter by
					</Headline2>
					<FilterWrapper>
						<FilterText>Sort By</FilterText>
						<Label>
							<Checkbox />
							Most relevant
						</Label>
						<Label>
							<Checkbox />
							Newest
						</Label>
					</FilterWrapper>
					<FilterWrapper>
						<FilterText>Orientation</FilterText>
						<Label>
							<Checkbox />
							All Orientation
						</Label>
						<Label>
							<Checkbox />
							Landscape
						</Label>
						<Label>
							<Checkbox />
							Portrait
						</Label>
					</FilterWrapper>
					<FilterWrapper>
						<FilterText style={{ marginBottom: "10px" }}>
							Color
						</FilterText>
						<Input placeholder='Enter hex or select' />
					</FilterWrapper>
				</SidebarContent>
				<MainContent>
					<Headline>Portrait</Headline>
					<BodyText>
						100+ portrait photos, available to download for free.
					</BodyText>
					{/* <TagGroup style={{ marginBottom: "2rem" }} items={tabs} /> */}
					<TagsSlider />
					<ImageGrid />
				</MainContent>
			</Container>
		</Wrapper>
	);
};

const NavSearchBar = () => {
	return (
		<SearchForm>
			<InputField
				style={{
					border: "1px solid #3d416c",
					borderRadius: "var(--radius) 0  0 var(--radius)",
					paddingLeft: "1.5rem",
					height: "2.5rem",
					fontSize: "var(--font-7)",
				}}
				placeholder='Search high quality photos for free!...'
			/>
			<SearchImageButton theme='outlined'>
				<Image src={camera} />
			</SearchImageButton>
		</SearchForm>
	);
};

const SearchForm = styled.form`
	display: flex;
	width: 540px;
	margin-left: 1.5rem;

	@media (max-width: 1500px) {
		width: 470px;
	}
`;

const Image = styled.img`
	width: 1rem;
	height: 1rem;
`;

const SearchImageButton = styled(Button)`
	padding: 0 0.75rem;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	margin-top: 6.25rem;
	column-gap: 39px;
`;

const SidebarContent = styled.div`
	width: 163px;
`;

const FilterWrapper = styled.div`
	margin-bottom: 64px;
`;

const FilterText = styled.div`
	color: #bec0ce;
	margin-bottom: 1rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	-webkit-appearance: none;
	appearance: none;
	position: relative;
	display: inline-block;
	margin-right: 8px;
	margin-top: 3px;
	width: 12px;
	height: 12.25px;
	border: 1.5px solid #fff;
	border-radius: 2px;
	background-color: transparent;

	&:checked {
		background-color: var(--pishure-light-red);
		border-color: var(--pishure-light-red);
	}
`;

const Input = styled(Button)`
	color: #bec0ce;
	padding: 0 1rem;
	height: 40px;
	max-width: 163px;
	border: var(--border-blue);

	&::placeholder {
		color: inherit;
	}
`;

const Label = styled.label`
	display: block;
	margin-bottom: 10px;
`;

const MainContent = styled.div`
	border-top: 1px solid #1c2141;
	border-left: 1px solid #1c2141;
	padding: 3rem 0 0 1.5rem;
	flex: 1 1 0;
	min-width: 0;
	${"" /* width: 100%; */}
`;

const Headline2 = styled.h3`
	font-size: var(--font-5);
	margin-top: 3rem;
`;

const Headline = styled.h1`
	font-size: var(--font-1);
	line-height: 1.3;
	margin-bottom: 8px;
`;

const BodyText = styled.p`
	line-height: 1.5;
	font-size: var(--font-5);
	margin-bottom: 3.5rem;
`;

export default SearchResults;
