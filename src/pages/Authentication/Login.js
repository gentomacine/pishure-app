import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import Header, { HeaderText, HeaderInner } from "../../components/Header";
import { MetroSpinner } from 'react-spinners-kit'

import ImagePreview, {
	ImagePreviewDetails,
	ImagePreviewWrap,
} from "../../components/ImagePreview";
import Icon from "../../components/Icon/Icon";

import { Wrapper, Flex } from "../../components/Container/Wrapper";
import FormGroup from "../../components/FormGroup/FormGroup";
import Logo from "../../components/Logo/Logo";

import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";
import Spacer from "../../components/Spacer/Spacer";

import { StyledLink } from "../../components/Link/Links";

import {
	FormWrapper,
	Headline,
	BodyText,
	WrapperItem,
	Or,
	OrInner,
	Form,
	FormRow,
} from "./AuthStyles";
import { LoginFormValidation } from "../../hooks/loginFormValidation";
import { useAuth } from "../../context/AuthContext";
import * as auth from "./auth-provider";
import LeftSideNav from "../../components/Header/LeftSideNav";

const Signin = () => {
	const { register, handleSubmit, errors } = LoginFormValidation();
	const [loading, setLoading] = useState(false)

	const { user, setUser } = useAuth();
	const history = useHistory()

	if (user) return <Redirect to='/' />;

	const login = async (userData) => {
		setLoading(true)
		try {
			const response = await auth.login(userData);
		    console.log('kicked of')
			if (response.type === "error") {
				console.log('something went wrong')
				setLoading(false)
			} else if(response.type === "success") {
				const accessToken =  await response.data.user.access_token;
				window.localStorage.setItem('userUniqueKey', JSON.stringify(accessToken));
				window.localStorage.setItem('credentials', JSON.stringify(response.data));
				setLoading(false)
				setUser(response.data.user)
				console.log(response)
				// if (response.data.user.avatar == null) {
				// 	history.push('/profile')
				// }
				history.push('/profile')
			}

		} catch (err) {
			console.log(err);
			setLoading(false)
		}
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
					<Headline>Login to Pishure.</Headline>
					<BodyText>
						Tell the true Nigerian stories through the lenses of
						creators all over Nigeria.
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
					<Form onSubmit={handleSubmit(login)}>
						<FormRow>
							<FormGroup
								label='Email address'
								name='username'
								register={register}
								error={errors.username}
								required
							/>
						</FormRow>

						<FormRow>
							<FormGroup
								type='password'
								name='password'
								register={register}
								label='password'
								error={errors.password}
								required
							/>
						</FormRow>

						<FormLink to='/forgotpassword'>
							Forgot password?
						</FormLink>
						<Button
							theme='primary'
							width='100%'
							fontSize='1rem'
							height='3.5rem'
							type='submit'
							style={{display: 'flex', justifyContent: 'center'}}
						>
							{loading ? <MetroSpinner loading={loading} style={{color: '#fff', fontSize: '20px'}}/> : 'Login'}
						</Button>
					</Form>
				</FormWrapper>
			</Flex>
		</Wrapper>
	);
};

const FormLink = styled(StyledLink)`
	display: block;
	margin-bottom: 2.5rem;
	font-size: var(--font-6);
	text-decoration: underline var(--white);
`;

export default Signin;
