import styled from "styled-components";
import Icon from "../Icon/Icon";
import { InputBox, InputField } from "../FormGroup/FormGroup";

export const SearchInput = () => {
	const SearchImage = (
		<SearchImageButton>
			<Icon type='camera' />
		</SearchImageButton>
	);

	return (
		<SearchWrapper>
			<SearchInputBox>
				<InputField
					style={{
						paddingRight: ".7rem",
					}}
					placeholder='Search high quality photos for free!...'
				/>
				{SearchImage}
			</SearchInputBox>
			<SearchButton>
				<Icon type='search' />
			</SearchButton>
		</SearchWrapper>
	);
};

const SearchWrapper = styled.form`
	display: flex;
	margin-bottom: 1rem;
`;

const SearchInputBox = styled(InputBox)`
	height: 4.5rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;

	@media (max-width: 540px) {
		height: 3rem;
		padding-left: 0.7rem;
		padding-right: 0.7rem;
	}
`;

const IconImage = styled.img``;

const SearchImageButton = styled.button`
	background: none;
`;

const SearchButton = styled.button`
	width: 4.625rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 var(--radius) var(--radius) 0;
	background: var(--pishure-red);
`;
