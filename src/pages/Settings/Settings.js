import React, {useState} from 'react'
import styled from "styled-components"
import { Wrapper } from "../../components/Container/Wrapper";
import Header, { NavSideContent } from '../../components/Header';
import LeftSideNav from '../../components/Header/LeftSideNav';
import MainHeader from '../../components/Header/MainHeader';
import ManageAccount from '../manageAccount/ManageAccount';
import Preference from '../preference/Preference';
import EditProfile from '../profile/EditProfile';

const Settings = () => {

    const [item, setItem] = useState('profile')

    return (
        <Wrapper>
            <MainHeader />
            <SettingsWrapper>
                <MenuContent>
                    <h2>Settings</h2>
                    <MenuItem className={ item == "profile" ? 'activeMenu' : null } onClick={() => setItem('profile')}>Profile</MenuItem>
                    <MenuItem className={ item == "account" ? 'activeMenu' : null } onClick={() => setItem('account')}>Manage account</MenuItem>
                    <MenuItem className={ item == "preference" ? 'activeMenu' : null } onClick={() => setItem('preference')}>Preferences</MenuItem>
                </MenuContent>
                <MainContent>
                    {
                        item == 'profile' ?
                        <EditProfile />
                        : 
                        item == 'account' ?
                        <ManageAccount />
                        :
                        <Preference />
                    }
                </MainContent>
            </SettingsWrapper>
        </Wrapper>
    )
}

const SettingsWrapper = styled.div`
    margin: 8rem 0;
    display: flex;

`

const MenuContent = styled.div`
        width: 31.25rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        

        h2 {
            font-size: 1.5rem;
            line-height: 1.95rem;
            margin-bottom: 2.5rem;
        }
`

const MainContent = styled.div`
    margin-top: 2.5rem;
    flex: 1;
`

const MenuItem = styled.div`
    width: 11.25rem;
    height: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #9395AD;
    margin-bottom: 1.56rem; 
    padding-left: 3rem;

`

export default Settings