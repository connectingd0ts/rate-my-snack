import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import StyledDropbox from './StyledDropbox';
import ImageInput from './ImageInput';
import Button from '@mui/material/Button';
import HorizontalRow from './HorizontalRow';
import Send from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { setImage } from '../redux/slice';
import { useGetImage } from '../redux/selectors';
import { useRateImageMutation } from '../redux/api';

const Dropbox = () => {
    const dispatch = useDispatch();
    const rawImage = useGetImage();
    const [displayImage, setDisplayImage] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [rateImage, rateImageResult] = useRateImageMutation();

    useEffect(() => {
        if (rateImageResult.data) {
            console.log('rateImageResult.data', rateImageResult.data);
        }
    }, [rateImageResult.data]);

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
            const file = e.dataTransfer.files[0];
            let reader = new FileReader();
            reader.onloadend = () => {
                setDisplayImage(reader.result);
            };
            reader.readAsDataURL(file);
            dispatch(setImage(file));
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setDisplayImage(reader.result);
        };

        reader.readAsDataURL(file);
        dispatch(setImage(file));
    };

    return (
        <>
            <StyledDropbox onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                {rawImage ?
                    <img src={displayImage} alt="uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
            {rawImage && (
                <HorizontalRow>
                    <ImageInput buttonLabel="Upload Another Image" onImageChange={handleImageChange} />
                    <Typography variant="body1">Or drag and drop another image</Typography>
                </HorizontalRow>
            )}
            <Button variant="contained" color="primary" disabled={!rawImage} onClick={() => rateImage(rawImage)}>
                Submit &nbsp;
                <Send />
            </Button>
        </>
    );
};

export default Dropbox;