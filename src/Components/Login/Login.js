import React, {useState, useCallback} from 'react'
import {Avatar, Container, Paper, Typography, Button, TextField} from '@mui/material'
import useStyles from './Styles'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate } from 'react-router-dom';

const definedUsername = 'admin';
const definedPassowrd = 'admin';

function Login() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const classes = useStyles();
 const navigate = useNavigate();

 const onChangeUsername = useCallback((e) => {
     setUsername(e.target.value);
 }, [setUsername])

 const onChangePassword = useCallback((e) => {
     setPassword(e.target.value);    
 }, [setPassword])

 const clear = () => {
     setUsername('');
     setPassword('');
 }

 const handleSubmit = useCallback((e) => {
     e.preventDefault();
     if (username === definedUsername && password === definedPassowrd) {
         //route to main page
        navigate('/todos');
        clear();
     }
 }, [username, password, navigate])


  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">Sign In</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus onChange={onChangeUsername}/>
                <TextField margin="normal" required fullWidth id="password" label="Password" name="password" autoFocus onChange={onChangePassword}/>

                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            </form>
        </Paper>
    </Container>
  )
}

export default Login

