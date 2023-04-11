import React from "react";
import styled from "styled-components";
import arrow from "../../assets/chevron-down.svg";

const TagGroup = ({ items, ...restProps }) => {
	return (
		<Tab {...restProps}>
			<TabInner>
				{items.map((item, i) => (
					<TabItem key={i}>{item}</TabItem>
				))}
			</TabInner>
			<Next>
				<Image src={arrow} />
			</Next>
		</Tab>
	);
};

const Tab = styled.div`
	position: relative;
	width: 100%;
`;

const TabInner = styled.ul`
	list-style: none;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	scroll-behavior: smooth;
	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const TabItem = styled.li`
	padding: 0.7rem 3.125rem;
	background: var(--black-700);
	display: inline-block;
	border-radius: 6.25rem;
	line-height: 1.5;
	font-size: var(--font-7);

	&:not(:last-child) {
		margin-right: 1rem;
	}
`;

const Next = styled.button`
	display: grid;
	place-items: center;
	width: 80px;
	height: 44px;
	position: absolute;
	background: var(--black-900);
	right: -5px;
	top: 0;
	z-index: 100;
`;

const Image = styled.img``;

export default TagGroup;
