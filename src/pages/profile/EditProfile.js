import React from 'react'
import styled from "styled-components"

const EditProfile = () => {
    return (
        <EditWrapper>
            <ImageContainer>
                <div>
                    <img alt=""/>
                    <p>Max size 5mb.</p>
                </div>
                <button>Change Photo</button>
            </ImageContainer>
            <FormContainer>
                <NameInput>
                    <div>
                        <label htmlFor="">First name</label>
                        <input type="text" placeholder="Firstname"/>
                    </div>
                    <div>
                        <label htmlFor="">Last name</label>
                        <input type="text" placeholder="Lastname"/>
                    </div>
                </NameInput>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email Address"/>
                <label htmlFor="">Short bio</label>
                <input className="text" type="text" placeholder="Write something interesting..."/>
                <label htmlFor="">Location</label>
                <input type="text" placeholder="Email Address"/>
                <label htmlFor="">Portfolio/Website</label>
                <input type="text" placeholder="Email Address"/>
                <FormButtons>
                    <Button>Cancel</Button>
                    <Button red>Update</Button>
                </FormButtons>
            </FormContainer>
        </EditWrapper>
    )
}

const EditWrapper = styled.div`
    max-width: 28.125rem;
`

const ImageContainer = styled.div`
    height: 9.146rem;
    display: flex;
    align-items: center;
    margin-bottom: 3.6rem;

    button {
        margin-left: 25px;
        font-weight: bold;
        color: white;
        width: 7.5rem;
        height: 2.5rem;
        border-radius: 5px;
        border: 1px solid #3D416C;
        background-color: #12141D;
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #fff;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const FormContainer = styled.form`

    label {
        display: block;
        margin-bottom: 24px;
    }

    input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #3D416C;
        background-color: #12141D;
        height: 3.5rem;
        padding-left: 10px;
        font-size: 16px;
        color: white;
        margin-bottom: 2rem;

        &::placeholder {
            color: #BEC0CE;
        }

        &.text {
            height: 4.875rem;
        }
    }
`

const NameInput = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    input {
        width: 13.313rem;
        border-radius: 5px;
        border: 1px solid #3D416C;
        background-color: #12141D;
        height: 3.5rem;
        padding-left: 10px;
        font-size: 16px;
        color: white;

        &::placeholder {
            color: #BEC0CE;
        }
    }
`

const FormButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const Button = styled.div`
    width: 13.313rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${props => props.red ? '#E21F3B' : '#3D416C'};
    background-color: ${props => props.red ? '#E21F3B' : '#12141D'};
    height: 3.5rem;
    padding-left: 10px;
    font-size: 16px;
    color: white;
    cursor: pointer;
`

export default EditProfile
