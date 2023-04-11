import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteAccount from '../../components/DeleteAccount'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

function ManageAccount() {

    const [deleteTab, showDeleteTab] = useState(false)
    const [passwordTab, showPasswordTab] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false)
    
    const toggleDel = () => {
        showDeleteTab(!deleteTab)
    }

    const iconStyles = {
        position: 'absolute', 
        right: '15px', 
        fontSize: '25px', 
        top: '20%',
        cursor: 'pointer'
    }
                   

    return  (
        <>
        {
        deleteTab ? 
        <DeleteAccount toggleDel={toggleDel}/> 
        :
        <PreferenceContainer>
            <LinkContainer>
                <h2>Link accounts</h2>
                <Account>
                    <div>
                        <h5>Connect Twitter</h5>
                        <p>Add your Twitter to your Pishure account</p>
                    </div>
                    <Button>
                        Connect
                    </Button>
                </Account>
                <Account>
                    <div>
                        <h5>Connect Instagram</h5>
                        <p>Add your Instagram to your Pishure account</p>
                    </div>
                    <Button>
                        Connect
                    </Button>
                </Account>
            </LinkContainer>
            <SecurityContainer>
                <h2>Security</h2>
                <OptionContainer>
                    <div>
                        <h5>Update password</h5>
                        <p>Change or reset current password</p>
                    </div>
                    <Button bg onClick={() => showPasswordTab(!passwordTab)}>
                        {passwordTab ? 'Cancel' : 'Change password'}
                    </Button>
                </OptionContainer>
                {passwordTab &&
                    <PasswordContainer>
                        <div>
                            <input type={togglePassword ? "text" : "password"} placeholder="Current Password"/>
                                {
                                togglePassword 
                                ?
                                <AiFillEyeInvisible style={{...iconStyles}} onClick={() => setTogglePassword(!togglePassword)}/>
                                :
                                <AiFillEye style={{...iconStyles}} onClick={() => setTogglePassword(!togglePassword)}/>
                                }
                          
                        </div>
                        <div>
                            <input type={toggleConfirmPassword ? "text" : "password"} placeholder="New Password"/>
                            {
                                toggleConfirmPassword 
                                ?
                                <AiFillEyeInvisible style={{...iconStyles}} onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}/>
                                :
                                <AiFillEye style={{...iconStyles}} onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}/>
                                }
                        </div>
                        <button>
                            Change password
                        </button>
                    </PasswordContainer>
                }
                <OptionContainer>
                    <div>
                        <h5>Delete your account</h5>
                        <p>By deleting, you will lose all your data</p>
                    </div>
                    <Button delete bg onClick={toggleDel}>
                        Delete Account
                    </Button>
                </OptionContainer>
            </SecurityContainer>
        </PreferenceContainer>
        }
    </>
    )
}

const PreferenceContainer = styled.div`
    margin-top: 2.5rem;
    max-width: 28.188rem;
    color: #fff;
`

const LinkContainer = styled.div`

    border-bottom: 1px solid #3d416ce6;

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
    }
`

const Account = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0;
    
    div {
        h5 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        
        p {
            font-weight: 0.875rem;
            color: #8f9097;
        }
    }
`

const SecurityContainer = styled.div`
    margin-top: 2.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
    }
`

const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 0;
    
    div {
        h5 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
        
        p {
            font-weight: 0.875rem;
            color: #8f9097;
        }
    }

`

const Button = styled.button`
    width: ${props => props.bg ? '9.375rem' : '6.25rem'};
    height: 2.5rem;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    border: ${props => props.delete ? 'none' : '1px solid #3d416ce6'};
    background-color: ${props => props.delete ? '#E21F3B' : '#12141D'  };
`

const PasswordContainer = styled.div`
    width: 100%;
    height: 17rem;
    margin: 1.5rem 0;
    border-radius: 5px;
    padding: 1.5rem 2.625rem;
    background-color: #12141D;


    div {
        position: relative;
    }

    input {
        padding-left: 1rem;
        position: relative;
        width: 22.875rem;
        height: 3.5rem;
        border-radius: 5px;
        border: 1px solid #3D416C;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        color: #BEC0CE;
    }

    button {
        margin-top: .5rem;
        background-color: #E21F3B;
        width: 100%;
        height: 3.5rem;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 1rem;
    }
`

// const Icon = styled.div`
//     position: absolute;
//     width: auto;
//     height: auto;
//     background-color: yellow;
//     top: 0px;
//     right: 0;
// `

export default ManageAccount
