import { useEffect, useState } from "react";
import { useLoginMutation } from "../redux/api";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login({ username, password });
            localStorage.setItem('access_token', data.access_token);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginStyle = { margin: '20px 0 0 0' }

    return (
        <Grid>
            <Paper elevation={10} sx={{ padding: 20, width: '280px', margin: "50px auto" }}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <Typography variant="h4">Login</Typography>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label='Username'
                        placeholder='Enter username'
                        variant="outlined"
                        sx={marginStyle}
                        fullWidth required />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label='Password'
                        placeholder='Enter password'
                        type='password'
                        variant="outlined"
                        sx={marginStyle}
                        fullWidth required />
                    <Button type='submit' color='primary' variant="contained" sx={marginStyle} fullWidth>Sign in</Button>
                </form>
            </Paper>
        </Grid>
    )

    // return (
    //     <Grid container direction="column" spacing={2}>
    //         <Grid item>
    //             <Typography variant="h4">Login</Typography>
    //         </Grid>
    //         <Grid item>
    //             <form onSubmit={handleLogin}>
    //                 <Grid container direction="column" spacing={2}>
    //                     <Grid item>
    //                         <TextField
    //                             fullWidth
    //                             label="Username"
    //                             variant="outlined"
    //                             value={username}
    //                             onChange={(e) => setUsername(e.target.value)}
    //                         />
    //                     </Grid>
    //                     <Grid item>
    //                         <TextField
    //                             fullWidth
    //                             label="Password"
    //                             type="password"
    //                             variant="outlined"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)}
    //                         />
    //                     </Grid>
    //                     <Grid item>
    //                         <Button type="submit" variant="contained" color="primary">
    //                             Login
    //                         </Button>
    //                     </Grid>
    //                 </Grid>
    //             </form>
    //         </Grid>
    //     </Grid>
    // );
};

export default Login;