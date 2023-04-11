import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function DeleteAccount({toggleDel}) {
    return (
        <DeleteContainer>
            <h2>Delete your account</h2>
            <p>If you’d like to remove a photo, you can do that from <Link to="/profile">here.</Link></p>
            <p>Once you delete your account, you will not be able to recover your photos, 
                stats, or info. Be sure you really want to delete your account.</p>
            <BtnContainer>
                <Btn onClick={toggleDel}>Cancel</Btn>
                <Btn del>Delete</Btn>
            </BtnContainer>
        </DeleteContainer>
    )
}

const DeleteContainer = styled.div`
    padding: 1.5rem 0;
    width: 29.625rem;
    height: 21.875rem;
    background-color: #12141D;
    border-radius: 5px;


    h2 {
        font-size: 1.25rem;
        font-weight: 600;
        border-bottom: 1px solid #1C2141;
        padding-left: 1.5rem;
        padding-bottom: 1.5rem;
    }

    p {
        font-size: 1rem;
        margin: 1.5rem 0;
        line-height: 1.5rem;
        padding: 0 1.5rem;

        a {
            color: var(--pishure-red);
        }
    }
`

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;

`

const Btn = styled.button`
    width: 12.563rem;
    height: 2.5rem;
    border-radius: 5px;
    background-color: ${props => props.del ? '#E21F3B' : 'transparent'};
    border: ${props => props.del ? 'none' : '1px solid #3D416C'};
    color: #fff;
    font-weight: bold;
`

export default DeleteAccount
