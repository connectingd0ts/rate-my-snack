import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StyledDropbox from './StyledDropbox';

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
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span">
                                            Upload
                                        </Button>
                                    </label>
                                </>
                            )}
                    </>
                )}
        </StyledDropbox>
    );
};

export default Dropbox;