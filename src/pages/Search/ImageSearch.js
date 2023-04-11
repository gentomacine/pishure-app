import React from 'react'
import Dropzone from '../../components/DropZone/Dropzone'
import { useFilehandler } from '../../hooks/useFilehandler'
import ImageSearchResult from './ImageSearchResult'


function ImageSearch() {

    const { handleDrop, handleFile, setFile, file } = useFilehandler()
    return (
        <div>
            
            {file ?
                <ImageSearchResult/>
             : 
                <Dropzone handleDrop={handleDrop} handleFile={handleFile} setFile={setFile}/>
            } 
        </div>
    )
}

export default ImageSearch
