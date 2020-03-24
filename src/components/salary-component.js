import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Input } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 'auto'
    },
});

const useStyles2 = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function Salary({ summaryHandler,googleObj }) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [value, setValue] = useState([1, 30]);
    const [salaryInputValue, setSalaryInputValue] = useState(100000);
    const [expense,setExpense] = useState(0);
    const [savings,setSavings] = useState(0);
    const [googleName,setGoogleName] = useState('')

    const isEmpty=(value)=>{
        return (value == null || value.length === 0);
      }

    useEffect(()=>{
        if( (Object.keys(googleObj).length === 0 && googleObj.constructor === Object) == false )
        {
            setGoogleName(googleObj.profileObj.name)
        }

    },[])

    useEffect(() => {
        
        let expense =  calcExpense(salaryInputValue,value[0])
        let savings = calcSaving(salaryInputValue,value[0])
        setExpense(expense)
        setSavings(savings);

                 summaryHandler({name:'', election:value[0], salary:salaryInputValue, 
             expense:expense, savings:savings
         })
        if((Object.keys(googleObj).length === 0 && googleObj.constructor === Object ) == false)
        {

        }



 

    }, [value,salaryInputValue])


    const handleSalaryInputValueChange = (event) => {
        setSalaryInputValue(event.target.value);
    };

    const handleChange = (event, newValue) => {

        setValue(newValue)
        let expense =  calcExpense(salaryInputValue,newValue[0])
        let savings = calcSaving(salaryInputValue,newValue[0])
        setExpense(expense)
        setSavings(savings)

         summaryHandler({name:googleObj.profileObj.name, election:newValue[0], salary:salaryInputValue, 
             expense:expense, savings:savings
         })
    }

    const valuetext = (value) => {
        return `${value}$`;
    }


    const calcExpense = (salary,sliderValue) => {
            let result = (salary/12)*(sliderValue/100)
            return result.toFixed(0);
    }

    const calcSaving = (salary,sliderValue) =>{
        let result = (salary/12)*(1-(sliderValue/100))
        return result.toFixed(0);
    }
    

    return (
        <div className={classes.root}>
            {Object.keys(googleObj).length === 0 && googleObj.constructor === Object ?
                null :
                <div>
                    <Typography id="range-slider" gutterBottom>
                        Welcome To Monthly Budget {googleObj.profileObj.name}
                    </Typography>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        min={1}
                        max={30}
                    />

                    <div>
                        <Typography id="salaryTitle" gutterBottom>
                            Your Salary :
                        </Typography>
                        <FormControl fullWidth className={classes2.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={salaryInputValue}
                                onChange={handleSalaryInputValueChange}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
                    <div>
                    <Typography id="expenseTitle" gutterBottom>
                            Your Expense:
                        </Typography>
                        <Typography id="expenseValue" gutterBottom>
                            {expense}
                        </Typography>
                    </div>
                    <div>
                    <Typography id="savingsTitle" gutterBottom>
                            Your Savings:
                        </Typography>
                        <Typography id="savingsValue" gutterBottom>
                            {savings}
                        </Typography>
                    </div>

                </div>
            }
        </div>

    )
}

export default Salary
