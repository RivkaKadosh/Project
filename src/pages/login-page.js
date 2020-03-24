import React from 'react'
import MyGoogleLogin from '../components/google-login-component'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'block',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: 'auto',
      },
    },
  }));

function LoginPage({googleHandler}) {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Paper variant="outlined" >
            <MyGoogleLogin googleHandler={googleHandler} />
            </Paper>
        </div>
    )
}

export default LoginPage

