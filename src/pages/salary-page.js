import React from 'react'
import Salary from '../components/salary-component'
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

function SalaryPage({summaryHandler,googleObj}) {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Paper variant="outlined" >
            <Salary summaryHandler={summaryHandler} googleObj={googleObj} />
            </Paper>
        </div>
    )
}

export default SalaryPage
