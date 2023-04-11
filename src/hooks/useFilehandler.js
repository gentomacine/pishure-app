import {useState} from 'react'

export const useFilehandler = () => {
    const [file, setFile] = useState(null);
	const [imageSizeError, setImageSizeError] = useState("");

	const handleFile = e => {
		const image = e.target.files[0];
		let idealSize = 4;
		if (image.size > idealSize * 1024 * 1024) {
			setImageSizeError("Image should not be greater than 4mb");
			setTimeout(() => setImageSizeError(""), 2000);
			return;
		}
		setFile(image);
		console.log(file);
	};

	const handleDrop = e => {
		e.preventDefault();
		const image =
			e.dataTransfer.items[0].getAsFile() || e.dataTransfer.files[0];
		let idealSize = 4;
		if (image.size > idealSize * 1024 * 1024) {
			setImageSizeError("Image should not be greater than 4mb");
			setTimeout(() => setImageSizeError(""), 2000);
			return;
		}
		setFile(image);
    };
    
    return {file, imageSizeError, handleFile, handleDrop, setFile}
}