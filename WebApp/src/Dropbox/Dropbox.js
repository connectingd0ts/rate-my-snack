import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import StyledDropbox from './StyledDropbox';
import ImageInput from './ImageInput';
import Button from '@mui/material/Button';
import HorizontalRow from './HorizontalRow';
import Send from '@mui/icons-material/Send';

const Dropbox = () => {
    const [image, setImage] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(e.dataTransfer.files[0]);
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            <StyledDropbox onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                {image ?
                    <img src={image} alt="uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    : (
                        <>
                            {dragActive ?
                                <Typography variant="body1">Drop it here</Typography>
                                : (
                                    <>
                                        <Typography variant="body1">Drag and drop an image here or</Typography>
                                        <ImageInput buttonLabel="Upload" onImageChange={handleImageChange} />
                                    </>
                                )}
                        </>
                    )}
            </StyledDropbox>
            {image && (
                <HorizontalRow>
                    <ImageInput buttonLabel="Upload Another Image" onImageChange={handleImageChange} />
                    <Typography variant="body1">Or drag and drop another image</Typography>
                </HorizontalRow>
            )}
            <Button variant="contained" color="primary" disabled={!image}>
                Submit &nbsp;
                <Send />
            </Button>
        </>
    );
};

export default Dropbox;