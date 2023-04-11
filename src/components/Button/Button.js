import styled from "styled-components";

const Button = ({ theme, ...props }) => {
	let Component = null;

	// eslint-disable-next-line default-case
	switch (theme) {
		case "primary":
			Component = PrimaryButton;
			break;
		case "outlined":
			Component = OutlinedButton;
			break;
		case "twitter":
			Component = TwitterButton;
			break;
		case "fb":
			Component = FbButton;
			break;
		case "secondary":
			Component = SecondaryButton;
	}

	if (Component) return <Component {...props} />;

	return null;
};

const BaseButton = styled.button.attrs(props => ({
	fontSize: props.fontSize || "var(--font-7)",
	width: props.width || "initial",
	height: props.height || "initial",
}))`
	padding: 0.7rem 1.7rem;
	width: ${props => props.width || "initial"};
	height: ${props => props.height || "initial"};
	border-radius: var(--radius);
	color: var(--white);
	line-height: 1.5;
	font-size: ${props => props.fontSize};
`;

const PrimaryButton = styled(BaseButton)`
	background: var(--pishure-red);
`;

const SecondaryButton = styled(BaseButton)`
	background: var(--pishure-light-red);
	pointer-events: none;
	cursor: not-allowed;
	${props =>
		props.file &&
		`
    pointer-events: initial;
    cursor: pointer;
    background: var(--pishure-red)
  `}
`;

const OutlinedButton = styled(BaseButton)`
	background: var(--black-700);
	border: var(--border-blue);
	border-color: ${props => props.border};
`;

const TwitterButton = styled(BaseButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 0.5rem;
	flex: 75.33%;
	height: 3rem;
	margin-right: 1.3rem;
	background: var(--twitter-blue);
`;

const FbButton = styled(OutlinedButton)`
	flex: 19.78%;
	height: 3rem;
	display: grid;
	place-items: center;
`;

export default Button;
