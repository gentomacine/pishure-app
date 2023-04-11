import React from "react";
import styled from "styled-components";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import Header, {
	HeaderText,
	HeaderInner,
} from "../../components/Header/Header";
import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import FormGroup from "../../components/FormGroup/FormGroup";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button";
import { useFormValidation } from "../../hooks/signUpFormValidation";
import { FormWrapper, Headline, BodyText, Form, FormRow } from "./AuthStyles";
import { Link } from "react-router-dom";

const SetPassword = () => {
	const { register, handleSubmit } = useFormValidation();
	const submitHandler = d => {
		alert(JSON.stringify(d));
	};

	return (
		<Wrapper>
			<Header>
				<Logo />
				<HeaderInner>
					<HeaderText>New to Pishure?</HeaderText>
					<Button
						theme='outlined'
						as={Link}
						style={{ marginLeft: "2rem" }}
						to='/signup'
					>
						Sign up
					</Button>
				</HeaderInner>
			</Header>
			<Flex>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Set password.</Headline>
					<SetPasswordText>
						Create a new password. Make sure it is something you can
						easily remember.
					</SetPasswordText>

					<Form onSubmit={handleSubmit(submitHandler)}>
						<FormRow mb='2.5rem'>
							<FormGroup
								name='password'
								register={register}
								type='password'
								label='Password'
							/>
						</FormRow>
						<Button
							theme='primary'
							width='100%'
							fontSize='1rem'
							height='3.5rem'
							type='submit'
						>
							Submit
						</Button>
					</Form>
				</FormWrapper>
			</Flex>
		</Wrapper>
	);
};

const SetPasswordText = styled(BodyText)`
	margin-bottom: 5rem;
`;

export default SetPassword;
