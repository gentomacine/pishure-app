import React from 'react'
import styled from 'styled-components'

function Preference() {
    return (
        <PreferenceContent>
            <h2>Email preferences</h2>
            <PreferenceOptions>
                    <div>
                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" />
                        <label for="styled-checkbox-1">Send me newsletters with the best photos on Pishure</label>
                    </div>
                    <div>
                        <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" />
                        <label for="styled-checkbox-2">Send me monthly email with stats about my photos</label>
                    </div>
                    <div>
                        <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" />
                        <label for="styled-checkbox-3">Send me photographer related news</label>
                    </div>
                    <div>
                        <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" />
                        <label for="styled-checkbox-4">Send me tips and guides</label>
                    </div>
                    <Button>Update</Button>
            </PreferenceOptions>
        </PreferenceContent>
    )
}

const PreferenceContent = styled.div`

    h2 {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 2.5rem;
    }
`

const PreferenceOptions = styled.form`
div {
    margin-bottom: 1.5rem;
    position: relative;

    label {
        cursor: pointer;
        margin-left: 20px;
    }

    input {
        height: 0;
        width: 0;
    }
    span {
        position: absolute;
        left: 0;
        width: 12px;
        height: 0.766rem;
        border: 1px solid #BEC0CE;
    }

}

`

const Button = styled.div`
    width: 13.313rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid;
    border-color: #E21F3B;
    background-color: #E21F3B;
    height: 3.5rem;
    padding-left: 10px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
`

export default Preference
