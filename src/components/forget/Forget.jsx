import React from 'react'; //
//import userService from '../components/services/UserService';
import swal from 'sweetalert';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

//import userService from '../services/UserService';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from './bg.jpg';
import { deepOrange } from '@material-ui/core/colors';
import apiService from '../../services/ApiService';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },

  background: {
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  mainGrid: {
    marginTop: '20px',
  },
  paper: {
    justifyContent: 'center',
    margin: theme.spacing(8, 6),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'inherit',
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: '95%',
    marginLeft: '20px',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: '10px',
    fontWeight: 500,
  },
  input: {
    color: 'white',
    //backgroundColor: '#362245',
    height: 80,
    fontSize: '25px',
  },
  button: {
    width: '70%',
    height: 60,
    marginTop: '40px',
    fontSize: '20px',
    marginLeft: '125px',
  },
  checkBox: {
    color: 'white',
  },
  Link: {
    color: 'white',
    fontSize: '18px',
    marginTop: '40px',
  },
  SignText: {
    color: 'white',
    fontSize: '42px',
    marginBottom: '5px',
  },

  floatingLabelFocusStyle: {
    color: 'white',
    fontSize: '20px',
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Forget = (props) => {
  const handleEmail = (e) => {
    e.preventDefault();

    apiService
      .post('/api/auth/forgetpassword', { email })
      .then((res) => {
        swal({
          title: 'Congratulations!',
          text: res.data.message,
          icon: 'success',
          button: 'Check Email ',
        });
        console.log(res.data.message);
      })
      .catch((error) => {
        swal({
          title: 'Oops!',
          text: error.response.data,
          icon: 'error',
          button: 'ok ',
        });
      });

    /*  userService
      .forgetpassword(email)
      .then((res) => {
        swal({
          title: 'Congratulations!',
          text: res.message,
          icon: 'success',
          button: 'Check Email ',
        });
      })
      .catch((error) => {
        swal({
          title: 'Oops!',
          text: error.response.data,
          icon: 'error',
          button: 'ok ',
        });
      });*/
  };

  const classes = useStyles();
  const [email, setEmail] = React.useState('');

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item sm={6} md={3} className={classes.background} />
      <Grid item style={{ backgroundColor: '#180c2b' }} md={6}>
        <div style={{ color: '#474745' }} className={classes.paper}>
          <Typography className={classes.SignText} component='h1' variant='h5'>
            Forget Password
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
                  variant='filled'
                  margin='normal'
                  color='secondary'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <br />

            <Button
              justify='space-around'
              className={classes.button}
              fullWidth
              variant='contained'
              color='default'
              onClick={handleEmail}
            >
              Send Email
            </Button>
            <Grid
              container
              justify='space-around'
              spacing={4}
              style={{ padding: 20 }}
            ></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Forget;
