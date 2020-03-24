import React from 'react'
import Summary from '../components/summary-component'
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

function SummaryPage({summary}) {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Paper variant="outlined" >
            <Summary summary={summary} />
            </Paper>
        </div>
    )
}

export default SummaryPage