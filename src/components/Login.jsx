import React, { useState, useReducer, useRef } from 'react';
import { Button, Tooltip } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import "../App.css"
import Validation from './Validation';
import swal from 'sweetalert';
import opens from "../images/monkey.png"
import closes from "../images/close.png"
import FormHelperText from '@material-ui/core/FormHelperText';
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
// import state from 'sweetalert/typings/modules/state';
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
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#414346',
        // "& .Mui-focused": {
        //     backgroundColor:'#262729',
        //     color:'white',
        //     fontWeight: "bold"
        //   },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "orange"
            }
        }
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#be8770',
    },
    input: {
        color: 'rgba(255, 255, 255, 0.92)',
        fontSize: '1.2rem'

    },
    inputLabel: {
        color: '#c59682',
        fontSize: '1.07rem',
        fontWeight: '700'
    },
}));

const reducer = (state, action) => {
    switch (action.type) {
        case 'notHide':
            return { picture: state.picture = opens }
        case 'hide':
            return { picture: state.picture = closes }
        default:
            return state
    }
}
const Login = () => {
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState({
        name: 'BHUMIKA',
        email: '',
        password: '',
        phoneNumber: ''

    })
    const classes = useStyles();
    const inputRef = useRef(null);
    const [state, dispatch] = useReducer(reducer, { picture: opens })
    const handleChange = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }


    return (
        <center>
            <ThemeProvider theme={theme}>
                <div className="loginPage"
                    onMouseOver={() => {
                        setErrors(Validation(value))
                        if ((errors.password == "") && (errors.name == "") && (errors.email == "")) {
                            setValid(true)
                        }
                        else {
                            setValid(false)
                        }
                    }}
                >
                    <img src={state.picture} alt="openeyes" className="monkeyImg" />
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper} >
                            <h1 style={{ color: 'white', fontSize: '2rem' }}>
                                Login
                            </h1>
                            <form noValidate >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoFocus
                                            error={errors.name}
                                            inputRef={inputRef}
                                            className={classes.root}
                                            value={value.name}
                                            onChange={(event) => {
                                                handleChange(event)
                                            }}
                                            variant="filled"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Full Name"
                                            name="name"
                                            onClick={
                                                () => {
                                                    dispatch({ type: 'notHide' })
                                                }
                                            }
                                            InputLabelProps={{
                                                className: classes.inputLabel
                                            }}
                                            InputProps={{
                                                className: classes.input
                                            }}
                                        />
                                        <FormHelperText error>{errors.name}</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            className={classes.root}
                                            onChange={(event) => {
                                                handleChange(event)
                                            }}
                                            value={value.email}
                                            error={errors.email}
                                            variant="filled"
                                            required
                                            fullWidth
                                            placeholder="abc@gmail.com"
                                            id="email"
                                            label="Email"
                                            onClick={
                                                () => {
                                                    dispatch({ type: 'notHide' })
                                                }
                                            }
                                            name="email"
                                            InputLabelProps={{
                                                className: classes.inputLabel
                                            }}
                                            InputProps={{
                                                className: classes.input
                                            }}
                                        />
                                        <FormHelperText error>{errors.email}</FormHelperText>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <LightTooltip title="Minimum eight characters, at least one letter, one number and one special character are required"
                                            arrow >
                                            <TextField
                                                color='grey'
                                                className={classes.root}
                                                onChange={(event) => {
                                                    handleChange(event)
                                                }}
                                                error={errors.password}
                                                value={value.password}
                                                variant="filled"
                                                required
                                                onFocus={() => {
                                                    dispatch({ type: 'hide' })

                                                }}

                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                onClick={() => {
                                                    dispatch({ type: 'hide' })
                                                    if (errors.password == '' && errors.name == '' && errors.email == '')
                                                        setValid(true)
                                                }}
                                                InputLabelProps={{
                                                    className: classes.inputLabel
                                                }}
                                                InputProps={{
                                                    className: classes.input
                                                }}
                                            />
                                        </LightTooltip>
                                        <FormHelperText error>{errors.password}</FormHelperText>

                                    </Grid>
                                </Grid>

                                {valid == true ?
                                    (
                                        <Link to={`/mainPage/` + value.name} style={{ textDecoration: 'none' }}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className={classes.submit}
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                    ) :
                                    (<div className='circularProgress'>
                                        <CircularProgress style={{ width: '3rem', margin: '3%' }}
                                        />
                                        <CircularProgress style={{ width: '3rem', margin: '3%' }}
                                        />
                                        <CircularProgress style={{ width: '3rem', margin: '3%' }}
                                        />
                                    </div>
                                    )
                                }
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/" style={{ color: 'white' }}>
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>

                    </Container>
                </div>
            </ThemeProvider>
        </center>
    );
}

export default Login