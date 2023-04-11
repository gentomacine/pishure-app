import {useEffect} from "react";
import styled from "styled-components";
import ShowSearch from "../../pages/Home/VisibleSearch";
import Logo from "../Logo";
import { HeaderSearch } from "../SearchInput/HeaderSearch";




const LeftSideNav = () => {

    const {hide, toggleSearch} = ShowSearch();
    window.addEventListener("scroll", toggleSearch)

    return (
        <LeftWrap>
            <Logo />
            { window.location.pathname === '/' &&
            <SearchBox visible={hide}>
                <HeaderSearch />
            </SearchBox>
            }
        </LeftWrap>
    )
}


const SearchBox = styled.div`
    margin-left: 30px;
    display: block;
	display: ${props => props.visible};
`

const LeftWrap = styled.div`
	display: flex;
	align-items: flex-start;
    width: auto;
`

export default LeftSideNav