import React from "react";
import styled from "styled-components";

import { Wrapper } from "../Container/Wrapper";
import Button from "../Button";

const ButtonGroup = ({ file }) => {
	return (
		<Container>
			<ButtonWrap>
				<Button theme='primary'>Cancel</Button>
				<Button
					theme='secondary'
					disabled={file ? false : true}
					file={file}
				>
					Submit
				</Button>
			</ButtonWrap>
		</Container>
	);
};

const Container = styled.div`
	height: 6.25rem;
	display: grid;
	place-items: center;
	border-top: 1px solid #1c2141;
`;

const ButtonWrap = styled(Wrapper)`
	display: flex;
	justify-content: space-between;
`;

export default ButtonGroup;
