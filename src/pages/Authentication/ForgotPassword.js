import React from "react";
import styled from "styled-components";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import Header, { HeaderInner, HeaderText } from "../../components/Header";

import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";

import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { ForgotPasswordValidation } from "../../hooks/forgotPasswordVal";

import { FormWrapper, Headline, BodyText, Form, FormRow } from "./AuthStyles";
import { Link } from "react-router-dom";
import LeftSideNav from "../../components/Header/LeftSideNav";

const ForgotPassword = () => {
	const { register, handleSubmit } = ForgotPasswordValidation();
	const submitHandler = d => {
		alert(JSON.stringify(d));
	};

	return (
		<Wrapper>
			<Header>
				<LeftSideNav />
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
					<Headline>Forgot password.</Headline>
					<ForgotPasswordText>
						Enter your email associated with this account and we’ll
						send you a reset password link.
					</ForgotPasswordText>
					<Form onSubmit={handleSubmit(submitHandler)}>
						<FormRow mb='2.5rem'>
							<FormGroup
								type='email'
								name='email'
								register={register}
								label='Email address'
							/>
						</FormRow>
						<Button
							theme='primary'
							width='100%'
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

const ForgotPasswordText = styled(BodyText)`
	margin-bottom: 5rem;
`;

export default ForgotPassword;
