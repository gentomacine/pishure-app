import React, {useState, useEffect} from 'react'
import { Wrapper } from '../../components/Container/Wrapper'
import Header, { NavSideContent } from '../../components/Header'
import LeftSideNav from '../../components/Header/LeftSideNav'
import styled from "styled-components"
import {GoLocation, GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import Photos from './Photos'
import Stats from './Stats'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { BiWindows } from 'react-icons/bi'




function Profile() {
    const items =  Array(12).fill({});
    const [content, setContent] = useState('photo')
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const userDetails = JSON.parse(window.localStorage.getItem('credentials'))
        setUser(userDetails?.user)
        console.log(user);
    }, [])
    if (!user) {
        return <h2>Loading ...</h2>
    }
    return (
        <Wrapper>
            <Header>
				<LeftSideNav />
				<NavSideContent />
			</Header>
            <Container>
                <UserInfo>
                    <Avatar>

                    </Avatar>
                    <Info>
                        <Fullname>
                        {user.firstname}  {user.lastname}
                        </Fullname>
                        <Description>
                        A creative sharing the Nigerian experience via my lenses.
                        </Description>
                        <SocialContainer>
                            <Location>
                                <GoLocation />
                                <p>Lagos, Nigeria</p>
                            </Location>
                            <GoPrimitiveDot style={{color: '#3d416c'}}/>
                            <Instagram>
                            <AiOutlineInstagram />
                            <p>_derin</p>
                            </Instagram>
                            <GoPrimitiveDot style={{color: '#3d416c'}}/>
                            <Twitter>
                                <FiTwitter />
                                <p>_derin</p>
                            </Twitter>
                        </SocialContainer>
                        <Link to="/settings">
                            <EditButton>
                                Edit Profile
                            </EditButton>
                        </Link>
                    </Info>
                </UserInfo>
            </Container>
            <TabControl>
                <Tab>
                    <p onClick={() => setContent('photo')}>Photos <span>{items.length}</span></p>
                    <p onClick={() => setContent('stat')}>Stats</p>
                </Tab>
                <TabScroll className={content == 'photo' ? 'photo' : 'stat'}/>
            </TabControl>
            {
                content == 'photo' ?
                (<Photos items={items}/>)
                :
                (<Stats />)
            }
        </Wrapper>
    )
}

const Container = styled.div`
    /* background-color: cyan; */
    width: 100%;
    min-height: 350px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
`

const UserInfo = styled.div`
    width: 43.25rem;
    /* background-color: pink; */
    min-height: 11.75rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

const Avatar = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    background-color: #fff;
    border-radius: 50%;
`

const Info = styled.div`
    margin-left: 2rem;

`

const Fullname = styled.h2`
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;

`

const Description = styled.h4`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
`

const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
`

const EditButton = styled.button`
    width: 6.25rem;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid var(--blue);
    background-color: var(--black-700);
    color: #fff;
    font-weight: 500;
    font-size: 0.875rem;

`

const Location = styled.div`
    display: flex;


    p {
        margin-left: .5rem;
    }
`

const Instagram = styled.div`
    display: flex;

    p {
        margin-left: .5rem;
    }
`

const Twitter = styled.div`
    display: flex;

    p {
        margin-left: .5rem;
    }
`

const TabControl = styled.div`
    margin-top: 4rem;
    height: 3rem;
    /* background-color: #fff; */
    color: #fff;
    display: flex;
    /* align-items: center; */
    border-bottom: 1px solid #1c2141;
    flex-direction: column;
    justify-content: center;
    position: relative;


    p {
        margin-right: 2.5rem;
        margin-left: 1rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
    }
`

const Tab = styled.div`
    display: flex;

    span {
        color: var(--blue);
        font-weight: bold;
        font-size: .9rem;
    }
`

const TabScroll = styled.div`
    background: var(--pishure-red);
    width: 5.625rem;
    height: 2px;
    align-content: end;
    position: absolute;
    bottom: 0;
    left: 5px;
    transition: all .5s ease-in-out;
    
`

export default Profile
