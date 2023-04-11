import React from 'react'
import Header from './Header'
import LeftSideNav from './LeftSideNav'
import { NavSideContent } from './NavSideContent'

function MainHeader() {
    return (
        <Header>
            <LeftSideNav />
            <NavSideContent />
        </Header>
    )
}

export default MainHeader
