import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dropbox from './Dropbox';

const Rate = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ maxWidth: '600px', width: '100%' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Upload image of any food item
                </Typography>
                <Dropbox />
            </Box>
        </Box>
    )
};

export default Rate;