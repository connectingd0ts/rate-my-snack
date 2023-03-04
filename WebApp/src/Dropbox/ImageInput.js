import Button from '@mui/material/Button';

const ImageInput = ({ buttonLabel, onImageChange }) => {
    return (
        <>
            <input
                accept="image/*"
                id="contained-button-file"
                multiple={false}
                type="file"
                onChange={onImageChange}
                style={{ display: 'none' }}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                    {buttonLabel}
                </Button>
            </label>
        </>
    )
};

export default ImageInput;