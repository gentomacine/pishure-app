import React from "react";
import styled from "styled-components";

const FormGroup = ({
	type,
	label,
	register,
	name,
	mgR,
	children,
	error,
}) => {
	return (
		<Container mgR={mgR ? mgR : null}>
			<InputBox error={error}>
				<InputField
					type={type}
					placeholder={label}
					{...register(name)}
				/>
				{children ? <Icon>{children}</Icon> : null}
			</InputBox>
			{error && <ErrorText>{error.message}</ErrorText>}
		</Container>
	);
};

export const InputBox = styled.div`
	padding: 0 1rem;
	width: 100%;
	height: 3.5rem;
	display: flex;
	align-items: center;
	background: #12141d;
	border: var(--border-blue);
	border-radius: var(--radius);
	${props =>
		props.error &&
		`
    border-color: var(--pishure-red)
  `}
`;

export const InputField = styled.input`
	font-size: 1rem;
	width: 100%;
	color: var(--grey-300);

	&::placeholder {
		color: inherit;
	}
`;

const Icon = styled.span``;

const ErrorText = styled.p`
	color: var(--pishure-red);
	font-size: var(--font-7);
	padding: 0.5rem 0 0 0.5rem;
	font-style: italic;
	font-weight: 300;
`;

const Container = styled.div`
	width: 100%;

	${props =>
		props.mgR &&
		`
    margin-right: 1.5rem;
  `}
`;

export default FormGroup;
