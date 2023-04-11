import React from 'react'
import styled from 'styled-components'
import { useFilehandler } from '../../hooks/useFilehandler';
import {ImCross} from 'react-icons/im'

function Dropzone({ handleDrop, handleFile, setFile } ) {
    const dragoverHandler = ev => {
		ev.preventDefault();
		
	};



    return (
        <Container>
                <Cancel onClick={() =>setFile(null)}>
                    <ImCross style={{color: '#fff'}}/>
                </Cancel>
            <DropTarget onDrop={handleDrop} onDragOver={dragoverHandler}>
                <UploadButton>
                    <Label>
                        <FileInput
                            type='file'
                            accept='image/png, image/jpeg'
                            onChange={handleFile}
                        />
                        Drag and drop images{" "}
                        <Block>
                            or <Highlight>browse</Highlight> to choose a file
                        </Block>
                        <Small>
                            (Images should be at most 4MB in size each.)
                        </Small>
                    </Label>
                </UploadButton>
            </DropTarget>
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    box-sizing: border-box;
    padding: 140px 1.25rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Cancel = styled.div`
background-color: #fff;
height: 35px;
width: 35px;
position: absolute;
top: 20px;
left: 90%;
border-radius: 50%;
background-color: var(--black-700);
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const DropTarget = styled.div`
	border: var(--border-blue);
	border-style: dashed;
	display: grid;
    width: 90%;
    height: 42rem;
    width: 82rem;
	place-items: center;
    margin: 0 auto;
    background: var(--black-700);
	/* margin-bottom: 3rem; */
	border-radius: var(--radius);

    @media screen and (max-width: 514px) {
        height: 35rem;
    }
`;

const UploadButton = styled.button`
	max-width: 17.8125rem;
	background: none;
	color: var(--white);
	font-size: var(--font-4);
	line-height: 1.8;
`;

const FileInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
`;

const Label = styled.label`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;

const Block = styled.span`
	font-size: 1.125rem;
`;

const Span = styled.span`
	display: inline-block;
`;

const Highlight = styled.span`
	color: var(--pishure-red);
`;

const Small = styled.span`
	font-size: 0.875rem;
	color: #bec0ce;
`;

export default Dropzone
