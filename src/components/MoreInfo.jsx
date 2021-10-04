import React, { useState, useRef } from 'react'
import Grid from "@material-ui/core/Grid"
import TextField from '@material-ui/core/TextField';
import { Button, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import swal from 'sweetalert';
import LinearProgress from '@material-ui/core/LinearProgress'
import FormHelperText from '@material-ui/core/FormHelperText';
import "../App.css"
import Validation from './Validation';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
  }
});
const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
    arrow: {
        color: theme.palette.common.white,
    },
}))(Tooltip);
const useStyles = makeStyles({
    root: {
        backgroundColor: '#414346',

    },
    input: {
        color: 'rgba(255, 255, 255, 0.92)',
        fontSize: '1.2rem'

    },
    inputLabel: {
        color: '#c59682',
        fontSize: '1.07rem',
        fontWeight:'700'
    },
    btn: {
        backgroundColor: '#be8770',
        width: '130px',
        transform: 'translate(0px,20px)',
        margin: '5px'
    },

})

const MoreInfo = (props) => {
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [value, setValue] = useState({
        firstName: '',
        email: 'bhumi@gmail.com',
        phoneNumber: '',
        lastName: '',
        birthday: ''
    })
    const handleChange = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    const classes = useStyles();
    const inputRef = useRef(null);
    return (
        <ThemeProvider theme={theme}>

        <div style={{ padding: '30px' }}>
            <Link to='/'>
                <Fab aria-label="add" className="backPg">
                    <ArrowBackIcon />
                </Fab>
            </Link>
            <br />
            <h2 style={{ color: 'white', fontSize: '2.3rem' }}>Information</h2>
            <div style={{ padding: '60px' }}
                onMouseOver={() => {
                    setErrors(Validation(value))
                    if ((errors.lastName == "") && (errors.firstName == "") && (errors.email == "") && (errors.age == "") && (errors.phoneNumber !='Invalid Phone Number')) {
                        setValid(true)
                    }
                    else{
                        setValid(false)
                    }
                }}
            >

                <form noValidate>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="filled"
                                required
                                error={errors.firstName}
                                fullWidth
                                value={value.firstName}
                                onChange={(event) => {
                                    handleChange(event)
                                }}
                                
                                id="firstName"
                                label="First Name"
                                className={classes.root}
                                autoFocus
                                InputLabelProps={{
                                    className: classes.inputLabel
                                }}
                                InputProps={{
                                    className: classes.input
                                }}
                                inputRef={inputRef}
                            />
                            <FormHelperText error>{errors.firstName}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="filled"
                                required
                                fullWidth
                                id="lastName"
                                value={value.lastName}
                                onChange={(event) => {
                                    handleChange(event)
                                }}
                                label="Last Name"
                                error={errors.lastName}
                                name="lastName"
                                autoComplete="lname"
                                className={classes.root}
                                InputLabelProps={{
                                    className: classes.inputLabel
                                }}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                            <FormHelperText error>{errors.lastName}</FormHelperText>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="email"
                                name="email"
                                variant="filled"
                                required
                                type='email'
                                fullWidth
                                id="email"
                                label="Email"
                                error={errors.email}
                                value={value.email}
                                onChange={(event) => {
                                    handleChange(event)
                                }}
                                className={classes.root}
                                InputLabelProps={{
                                    className: classes.inputLabel
                                }}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                            <FormHelperText error>{errors.email}</FormHelperText>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="filled"
                                error={errors.phoneNumber}
                                fullWidth
                                id="PhoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="phone number"
                                className={classes.root}
                                value={value.phoneNumber}
                                onChange={(event) => {
                                    handleChange(event)
                                }}
                                InputLabelProps={{
                                    className: classes.inputLabel
                                }}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                            <FormHelperText error>{errors.phoneNumber}</FormHelperText>

                        </Grid>
                    </Grid>


                    <br />
                    {/* <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        className={classes.root}
                        fullWidth
                        name='birthday'
                        variant="outlined"
                        value={value.birthday}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
          Label                  className: classes.input

                        }}
                        InputProps={{
                            className: classes.input
                        }}
                    /> */}
                    <LightTooltip title="Minimum age required is 18" arrow placement="right">
                        <TextField
                            name='birthday'
                            variant="outlined"
                            type='number'
                            id="date"
                            label='Age'
                            error={errors.age}
                            value={value.birthday}
                            onChange={(event) => {
                                handleChange(event)
                            }
                            }
                            className={classes.root}
                            InputLabelProps={{
                                className: classes.inputLabel

                            }}
                            InputProps={{
                                className: classes.input
                            }}
                        />
                    </LightTooltip>
                    <FormHelperText style={{ textAlign: 'center' }}
                        error>{errors.age}</FormHelperText>
                </form>
                <br />
                {valid == true ?(
                <Link to={`/mainPage/`+ value.firstName} style={{textDecoration:'none'}}>

                    <Button 
                    variant="contained"
                    // onClick={() => {
                    //     setErrors(Validation(value))
                    //     if ((errors.lastName == "") && (errors.firstName == "") && (errors.email == "") && (errors.age == "")) {
                    //         swal("Signed in successfully", `Welcome ${value.firstName}`, "success"
                    //         )
                    //     }
                    //     else {
                    //         inputRef.current.focus();
                    //     }

                    // }} 
                    className={classes.btn}>Sign In</Button>
                </Link>)
                    :
                    <LinearProgress />
                }

            </div>
        </div>
        </ThemeProvider>
    )
}

export default MoreInfo
