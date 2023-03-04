import { styled } from '@mui/material/styles';

const StyledDropbox = styled('div')(({ theme }) => ({
    border: '2px dashed grey',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '300px',
    '& > *': {
        margin: theme.spacing(1),
    },
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
}));

StyledDropbox.defaultProps = {
    onDragEnter: (e) => {
        e.preventDefault();
        e.stopPropagation();
    },
    onDragLeave: (e) => {
        e.preventDefault();
        e.stopPropagation();
    },
    onDragOver: (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
};

export default StyledDropbox;