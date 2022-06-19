import React from "react";
import "./register.css";
//import userService from '../../components/services/UserService';
import { toast } from "react-toastify";
//import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
//import userService from "../services/UserService";
import validator from "validator";
import Avatar from "@material-ui/core/Avatar";

//import Link from '@material-ui/core/Link';
//import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "./bg.jpg";
import { deepOrange } from "@material-ui/core/colors";
import apiService from "../../services/ApiService";
//import { Register1 } from '../../redux/apiCalls';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "130vh",

    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },

  background: {
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainGrid: {
    marginTop: "20px",
  },
  paper: {
    justifyContent: "center",
    margin: theme.spacing(8, 6),

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    //color: theme.palette.getContrastText(deepOrange[500]),
    //backgroundColor: deepOrange[500],
    //width: 86,
    //height: 86,
    //marginTop: '1px',
    //<Grid item sm={6} md={3} className={classes.background} />
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: "95%",
    marginLeft: "20px",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: "10px",
    fontWeight: 500,
  },
  input: {
    color: "white",
    //backgroundColor: '#362245',
    height: 80,
    fontSize: "25px",
  },
  button: {
    width: "70%",
    height: 60,
    marginTop: "40px",
    fontSize: "20px",
    marginLeft: "125px",
  },
  checkBox: {
    color: "white",
  },
  Link: {
    color: "white",
    fontSize: "18px",
    marginTop: "40px",
  },
  SignText: {
    color: "white",
    fontSize: "42px",
    marginBottom: "5px",
  },

  floatingLabelFocusStyle: {
    color: "white",
    fontSize: "25px",
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  //const dispatch = useDispatch();
  const history = useHistory();
  //const { isFetching, error } = useSelector((state) => state.user);

  //Function Call
  const handleregister = (e) => {
    e.preventDefault();

    apiService
      .post("/api/auth/register", { password, email, name, phone })
      .then((res) => {
        console.log(res.data);
        toast.success("Registerd Successfully");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
    //Register1(dispatch, { name, email, password, phone });
    //navigate.push('/login');
    //props.history.push('/login');
    /*userService
      .register(name, email, password, phone)
      .then((res) => {
        console.log(res);
        toast.success('Registerd Successfully');
        props.history.push('/login');
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  
*/
  };
  const emailValidation = (email) => {
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };
  const userNameValidation = (name) => {
    if (name.length >= 5 && name.length <= 15) {
      return true;
    } else {
      return false;
    }
  };
  const phoneValidation = (phone) => {
    if (
      phone.length === 11 &&
      phone.startsWith("03") &&
      phone.match(/^[0-9]+$/)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const passwordValidation = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&()*^%~{}=+-_]{8,}$/i;
    if (passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  };
  const confirmPasswordValidation = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const signupValidation = () => {
    if (
      emailValidation(email) &&
      userNameValidation(name) &&
      phoneValidation(phone) &&
      passwordValidation(password) &&
      confirmPasswordValidation(password, confirmPassword)
    ) {
      return true;
    } else {
      console.log("false");
      return false;
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item sm={6} md={3} className={classes.background} />
      <Grid item style={{ backgroundColor: "#180c2b" }} md={6}>
        <div style={{ color: "#474745" }} className={classes.paper}>
          <Avatar
            sm={{ width: 86, height: 86 }}
            className={classes.avatar}
            spacing={4}
          ></Avatar>
          <Typography className={classes.SignText} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2} className={classes.mainGrid}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  id="name"
                  label="User Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  helperText={
                    userNameValidation(name)
                      ? " "
                      : "User Name must be between 5 to 15 characters"
                  }
                  error={!userNameValidation(name)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  helperText={
                    phoneValidation(phone)
                      ? " "
                      : "Phone Number must be 11 digits and start with 03"
                  }
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  error={!phoneValidation(phone)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  margin="normal"
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={!emailValidation(email)}
                  helperText={
                    emailValidation(email) ? " " : "Email Address is not valid"
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  margin="normal"
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  required
                  fullWidth
                  //backgroundColor="#fcfaf7"
                  color="secondary"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  error={!passwordValidation(password)}
                  helperText={
                    passwordValidation(password)
                      ? " "
                      : "Password must be at least 8 characters, one letter and one number"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="filled"
                  margin="normal"
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  required
                  fullWidth
                  //backgroundColor="#fcfaf7"
                  color="secondary"
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  error={!confirmPasswordValidation(password, confirmPassword)}
                  helperText={
                    confirmPasswordValidation(password, confirmPassword)
                      ? " "
                      : "Password and Confirm Password must be same"
                  }
                />
              </Grid>
            </Grid>

            <br />

            <Button
              justify="space-around"
              className={classes.button}
              fullWidth
              variant="contained"
              color="default"
              onClick={(e) => {
                if (signupValidation()) {
                  handleregister(e);
                }
              }}
            >
              Sign up
            </Button>
            <Grid
              container
              justify="space-around"
              spacing={4}
              style={{ padding: 20 }}
            ></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  /*return (
    <>
      <div className='main-div'>
        <h1>Register Page</h1>
        <div className='form-data'>
          <label htmlFor='fname' className='label-2'>
            First Name
          </label>
          <br />
          <input
            type='text'
            className='text-1'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor='email' className='label-2'>
            Email
          </label>{' '}
          <br />
          <input
            type='text'
            className='text-1'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor='phone' className='label-1'>
            Phone #
          </label>
          <br />
          <input
            type='text'
            className='text-1'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <label htmlFor='password' className='label-2'>
            Password
          </label>
          <br />
          <input
            type='password'
            className='text-1'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{' '}
          <br />
        </div>
        <button className='btn-1' onClick={handleregister}>
          {' '}
          Register Here{' '}
        </button>
      </div>
    </>
  );*/
};

export default Register;
