import React, {useEffect} from "react";
import styled from "styled-components/macro";
import { Wrapper, Flex } from "../../components/Container/Wrapper";
import ImagePreview, { ImagePreviewDetails } from "../../components/ImagePreview";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import { NavSideContent } from "../../components/Header";
import ShowSearch from "./VisibleSearch";
import LeftSideNav from "../../components/Header/LeftSideNav";
import { scroll } from "../../hooks/Scroll";
import MainHeader from "../../components/Header/MainHeader";






const Home = () => {

	return (
		<Wrapper>
			<MainHeader />
			<Container>
				<Col>
					<Heading>Best Collection of Nigerian Stock Photos.</Heading>
					<Body>
						Tell the true Nigerian stories through the lenses of
						creators all over Nigeria.
					</Body>
					<SearchInput />
					<SearchExample>
						<Span>Try:</Span>danfo, street, traffic, lagos life,
					</SearchExample>
					<ImagePreviewDetails />
				</Col>
				<ImagePreview />
			</Container>

			<Pad />
			<ImageGrid />
		</Wrapper>
	);
};

const Container = styled(Flex)`
	margin-top: 8.25rem;
	padding-bottom: 0;

	@media (max-width: 830px) {
		justify-content: flex-start;
	}
`;

const Search = styled.h2`
	margin-left: 30px;
	display: ${props => props.visible ? props.visible : 'block'};
`

const LeftWrap = styled.div`
	display: flex;
	align-items: center;

`

const Col = styled.div`
	max-width: 33.75rem;

	@media (max-width: 1337px) {
		margin-right: 1.5rem;
	}

	@media (max-width: 470px) {
		margin-right: 0;
	}
`;

const Heading = styled.h1`
	font-size: var(--font-1);
	margin-bottom: 1rem;
	margin-top: 9.25rem;
	line-height: 1.3;

	@media (max-width: 470px) {
		font-size: var(--font-3);
	}

	@media (max-width: 768px) {
		margin-top: 3rem;
	}
`;

const Pad = styled.div`
	margin-bottom: 122px;
`;

const Body = styled.p`
	margin-bottom: 3rem;
	font-size: var(--font-5);
	line-height: 1.5;
	color: var(--grey-10);

	@media (max-width: 470px) {
		font-size: var(--font-6);
	}
`;

const Span = styled.span`
	display: inline-block;
	margin-right: 1rem;
`;

const SearchExample = styled.p`
	font-size: 1rem;
	color: var(--grey-10);
	margin-bottom: 17.75rem;

	@media (max-width: 830px) {
		margin-bottom: 0;
	}
`;

export default Home;
