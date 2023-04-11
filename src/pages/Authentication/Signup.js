import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import Header, {
  HeaderText,
  HeaderInner,
} from "../../components/Header/Header";
import ImagePreview, {
  ImagePreviewDetails,
  ImagePreviewWrap,
} from "../../components/ImagePreview";
import { MetroSpinner } from 'react-spinners-kit'

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import FormGroup from "../../components/FormGroup/FormGroup";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { StyledTextLink } from "../../components/Link/Links";
import {
  FormWrapper,
  Headline,
  BodyText,
  WrapperItem,
  Or,
  OrInner,
  Form,
  FormRow,
  FormText,
  MessageText,
} from "./AuthStyles";
import { Link } from "react-router-dom";

import Icon from "../../components/Icon/Icon";
import Spacer from "../../components/Spacer/Spacer";

import { useFormValidation } from "../../hooks/signUpFormValidation";
import { useAuth } from "../../context/AuthContext";
import {scroll} from '../../hooks/Scroll'
import * as auth from "./auth-provider";
import TagsSlider from "../../components/slider/Slider";
import LeftSideNav from "../../components/Header/LeftSideNav";

const Signup = () => {
	const { register, handleSubmit, errors } = useFormValidation();
	const [message, setMessage] = useState("");
	const { user } = useAuth();
	const history = useHistory();
	const [loading, setLoading] = useState(false)

	if (user) return <Redirect to='/' />;
	const signUp = async (data) => {
		setLoading(true)
		try {
			const response = await auth.signup(data);
			if (response.type === "error") {
				setMessage(response.message);
				setLoading(false)
			} else if(response.type === "success") {
				console.log(response)
				history.push('/login')
				setLoading(false)
			}
		} catch (err) {
			console.log(err);
			setLoading(false)
		}
	};
	return (
		<Wrapper>
			<Header>
				<Logo />
				<HeaderInner>
					<HeaderText>Already have an account?</HeaderText>
					<Button
						theme='outlined'
						as={Link}
						style={{ marginLeft: "2rem" }}
						to='/login'
					>
						Login
					</Button>
				</HeaderInner>
			</Header>
			<Flex>
				<ImagePreviewWrap>
					<ImagePreview />
					<ImagePreviewDetails />
				</ImagePreviewWrap>

				<FormWrapper>
					<Headline>Sign up to Pishure.</Headline>
					<BodyText>
						Millions of free beautiful Nigerian photos for every
						creative.
					</BodyText>
					<WrapperItem>
						<Button theme='twitter' fontSize='1rem'>
							<Icon type='twitter' />
							<Spacer size='1.5rem' />
							Sign up with Twitter
						</Button>
						<Button theme='fb'>
							<Icon type='fb' />
						</Button>
					</WrapperItem>
					<Or>
						<OrInner>OR</OrInner>
					</Or>
					{message ? <MessageText>{message}</MessageText> : null}
					<Form onSubmit={handleSubmit(signUp)} mb='1.5rem'>
						<FormRow grid>
							<FormGroup
								register={register}
								label='First name'
								mgR='1.5rem'
								name='firstname'
								required
								error={errors.firstname}
							/>
							<FormGroup
								register={register}
								name='lastname'
								label='Last name'
								required
								error={errors.lastname}
							/>
						</FormRow>

						<FormRow>
							<FormGroup
								register={register}
								type='email'
								label='Email address'
								name='email'
								required
								error={errors.email}
							/>
						</FormRow>

						<FormRow mb='2.5rem'>
							<FormGroup
								register={register}
								type='password'
								label='Password'
								name='password'
								required
								error={errors.password}
								minlength={8}
							/>
						</FormRow>
						<Button
							theme='primary'
							width='100%'
							fontSize='1rem'
							height='3.5rem'
							type='submit'
							style={{display: 'flex', justifyContent: 'center'}}
						>
							{loading ? <MetroSpinner loading={loading}/> : 'Sign Up'}
						</Button>
					</Form>
					<FormText>
						By signing up, you agree to our
						<StyledTextLink>Terms of Service</StyledTextLink> and
						<StyledTextLink>Privacy Policy</StyledTextLink>.
					</FormText>
				</FormWrapper>
			</Flex>
		</Wrapper>
	);
};

export default Signup;
