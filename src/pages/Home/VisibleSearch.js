import {useState} from 'react'

const ShowSearch = () => {

    const [hide, setHide] = useState('none')
    const toggleSearch = () => {
        if (window.scrollY > 500) {
            setHide("block")
        } else {
            setHide('none')
        }
    }

    return { hide, toggleSearch }
}

export default ShowSearch