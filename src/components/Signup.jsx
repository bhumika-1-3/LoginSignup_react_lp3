import React, { useState, useRef } from 'react'
import Grid from "@material-ui/core/Grid"
import { Button, Tooltip } from '@material-ui/core'
import "../App.css"
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Validation from './Validation'
import LinearProgress from '@material-ui/core/LinearProgress'
import { createTheme, ThemeProvider } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
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
        "& .MuiInputBase-root.Mui-disabled": {
            color: "white"
        }
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
        width: '100px',
        transform: 'translate(-30px,10px)'
    },
    btn2: {
        backgroundColor: '#be8770',
        width: '100px',
        transform: 'translate(-40px,20px)'
    },

})


const Signup = () => {
    const [tc, setTc] = useState('');
    const [check, setCheck] = useState(false);
    const [errors, setErrors] = useState({});
    const inputRef = useRef('');
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState({
        email: 'bhumika13@gmail.com',
        password: 'bhumika13@',
        Cpassword: 'bhumika13@',
        phoneNumber: ''
    })
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const classes = useStyles();

    return (
        <div >
                <ThemeProvider theme={theme}>

            <form noValidate className="signForm" onMouseOver={() => {
                setErrors(Validation(value))
                if ((errors.Cpassword == "") && (errors.password == "") && (errors.email == "") && (check == true)) {
                    setValid(true)
                }
                else {
                    setValid(false)
                }
            }}>
                <Link to={`login`} className="log">
                    <div className="lBtn">
                        <Button className='loginBtn' style={{ color: '#c59682' }}>Login</Button>
                    </div>
                </Link>

                <br />
                {/* Email */}
                <div>
                    <TextField
                        autoFocus
                        value={value.email}
                        id="email"
                        fullWidth
                        error={errors.email}
                        name="email"
                        inputRef={inputRef}
                        label="E-mail"
                        placeholder="abc@gmail.com"
                        multiline
                        variant="filled"
                        required
                        onChange={(event) => {
                            handleChanges(event)
                        }}
                        InputLabelProps={{
                            className: classes.inputLabel
                        }}
                        className={classes.root}
                        InputProps={{
                            className: classes.input
                        }}
                    />
                    <FormHelperText error>{errors.email}</FormHelperText>

                </div>
                <br />

                {/* Password */}
                <div>
                    <LightTooltip title="Minimum eight characters, at least one letter, one number and one special character are required"
                        arrow>
                        <FormControl variant="filled">
                            <InputLabel htmlFor="password" className={classes.inputLabel}>Password *</InputLabel>
                            <FilledInput
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={value.password}
                                fullWidth
                                name="password"
                                error={errors.password}
                                className={classes.root}
                                inputProps={{
                                    className: classes.input
                                }}
                                required
                                onChange={(event) => {
                                    handleChanges(event)
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </LightTooltip>

                    <FormHelperText error>{errors.password}</FormHelperText>

                </div>
                <br />

                {/*confirm password */}
                <div>
                    <Grid item xs={12}>
                        <LightTooltip title="Minimum eight characters, at least one letter, one number and one special character are required"
                            arrow>
                            <TextField
                                variant="filled"
                                required
                                error={errors.Cpassword}
                                fullWidth
                                value={value.Cpassword}
                                onChange={(event) => {
                                    handleChanges(event)
                                }}
                                name="Cpassword"
                                label="Confirm Password"
                                type="password"
                                id="Cpassword"
                                autoComplete="current-password"
                                className={classes.root}
                                InputLabelProps={{
                                    className: classes.inputLabel
                                }}
                                InputProps={{
                                    className: classes.input
                                }}
                            />
                        </LightTooltip>
                    </Grid>
                    <FormHelperText error>{errors.Cpassword}</FormHelperText>

                </div>
                <br />
                {/* Terms and conditions */}
                <LightTooltip title="Read the T&C carefully ! " arrow>
                    <FormControl component="fieldset">
                        <FormControlLabel

                            value="end"
                            control={<Checkbox color="primary" checked={check} />}
                            label="I agree to the terms of service"
                            labelPlacement="end"
                            onChange={(event) => {
                                setCheck(!check)
                                if (check === true) {
                                    setTc('Accept the terms and condtions!!')
                                }
                                else {
                                    setTc('')

                                }

                            }
                            }
                        />
                    </FormControl>
                </LightTooltip>
                <p style={{ fontSize: '.8rem', color: '#E74336', textDecoration: 'underline' }}>{tc}</p>

                {/* Submit button */}
                <br />



                {valid == true ?
                    (
                        <Link to="/signup/details" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" className={classes.btn}
                            >GO
                            </Button>
                        </Link>

                    ) :
                    (
                        <LinearProgress className='linearProgress'
                         />
                    )
                }



                {/* </Link> */}
                <span className="loginLink">
                <span className="loginData">Do you already have the password?</span><p>Please use the  &nbsp;
                    <Link to="login" className='log2'>
                        login form
                    </Link>
                </p> </span>
            </form>
            </ThemeProvider>
        </div >
    )
}

export default Signup
