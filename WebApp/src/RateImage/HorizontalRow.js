import Box from '@mui/material/Box';

const HorizontalRow = ({ children }) => {
    return (
        <Box display="flex" justifyContent="flex-start" alignItems='center' sx={{ gap: '20px', marginBottom: '20px' }}>
            {children}
        </Box>
    );
};

export default HorizontalRow;