import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../components/Container/Wrapper'
import Header, { NavSideContent } from '../../components/Header'
import LeftSideNav from '../../components/Header/LeftSideNav'
import MainHeader from '../../components/Header/MainHeader'
import ImageGrid from '../../components/ImageGrid/ImageGrid'

const ImageSearchResult = () => {
    return (
    <Wrapper>
        <MainHeader />
        <ImageDetails>
            <h2>Search by image</h2>
            <p>100+ similar photos, available to download for free.</p>
            <img src="" alt=""/>
        </ImageDetails>
        <SearchResult>
            <ImageGrid />
        </SearchResult>
    </Wrapper>
    )
}

const Container = styled.div`
 
`

const ImageDetails = styled.div`
    color: #fff;
    padding: 2rem 0;
    margin-top: 100px;
    max-width: 83rem;

    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 1.25rem;
        margin-top: 1rem;
    }

    img {
        border-radius: 15px;
        width: 10.25rem;
        height: 12.5rem;
        margin-top: 1rem;
        background-color: yellow;
    }

    div {
        width: 83rem;
    }
`

const SearchResult = styled.div`
    /* margin-top: 50px; */

`

export default ImageSearchResult
