import styled from "styled-components";
import Icon from "../Icon/Icon";
import { InputBox, InputField } from "../FormGroup/FormGroup";

export const HeaderSearch = () => {
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
		</SearchWrapper>
	);
};

const SearchWrapper = styled.form`
	display: flex;
	margin-bottom: 1rem;
    width: 33.75rem;
    height: 2.5rem;

	@media screen and (max-width: 470px) {
		height: 1.875rem;
		width: 14.813rem;
	}
`;

const SearchInputBox = styled(InputBox)`
    height: 100%;
	padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0;
    padding-bottom: 0;

	@media (max-width: 540px) {
		/* height: 3rem; */
		padding-left: 0.7rem;
		padding-right: 0.7rem;
	}
`;

const IconImage = styled.img`

`;

const SearchImageButton = styled.button`
    background: none;
    border-left: var(--border-blue);
    border-left: 1px solid var(--blue);
    padding-left: 1.5rem;
    height: 100%;
`;

const SearchButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 var(--radius) var(--radius) 0;
`;
