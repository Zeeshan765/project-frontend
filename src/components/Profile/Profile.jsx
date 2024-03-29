import React from "react";
import apiService from "../../services/ApiService";
import { useState } from "react";
import { toast } from "react-toastify";
import "./Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
//import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import validator from "validator";
import { deepOrange } from "@material-ui/core/colors";
import swal from "sweetalert";
import { Toast } from "bootstrap";
export default function Profile(props) {
  const[edit,setEdit]=useState(false);
  //Get Logged In User Data
  React.useEffect(() => {
    apiService.get("api/user/find").then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);
function EditsEnabled(){
  setEdit(true);
}
const validateEmail = (email) => {
  if (validator.isEmail(email)) {
    return true;
  } else {
    return false;
  }
};
function EditsDisabled(){
  setEdit(false);
}
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
function allValidation(name, email, phone) {
  console.log(name, email, phone);
  if (userNameValidation(name) && emailValidation(email) && phoneValidation(phone)) {
    handleupdate(name, email, phone);
  } else {
    toast.error("Please Enter Valid Data",{
      position: toast.POSITION.TOP_RIGHT,

      theme: "colored",
    });
  }
}

  function handleupdate() {
    apiService
      .put("/api/user/profile", { name, email, phone })
      .then((res) => {
        console.log(res);
        toast.success("Profile Updated Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        props.history.push("/components");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.response.data, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      });
  }
  function handlechange() {
    props.history.push("/update/password");
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "-30px",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "50%",

      margin: "auto",

      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #000",
    },
    image: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 6),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),

      backgroundColor: deepOrange[500],
      width: 86,
      height: 86,
      marginTop: "30px",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField:
     {  "&:disabled": {
      color: "white",
      backgroundColor: "#fff",
      
      
    }
    ,
      
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: "50px",
      fontWeight: 500,
    },

    input: {
      
      "&:disabled": {
        color: "black",
        backgroundColor: "#fff",
        
        
      }
      ,
      color: "white",
      backgroundColor: "#362245",
      height: 80,
      fontSize: "25px",
    },
    button: {
      backgroundColor: "#362245",
      fontSize: "20px",
      fontWeight: 500,
      color: "white",
      padding: "30px",
      marginLeft: "10px",
    },
    Cpbutton: {
      backgroundColor: "#362245",
      fontSize: "20px",
      fontWeight: 500,
      color: "white",
      padding: "30px",
      marginLeft: "10px",
      marginTop: "10px",
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
      marginTop: "5px",
    },

    floatingLabelFocusStyle: {
      color: "white",
      fontSize: "20px",
    },

    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  }));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const classes = useStyles();

  return (
    <div className="container">
      {/* <div>
        <input
          className="pass"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="pass"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="pass"
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div> */}
      <Grid container component="main" className={classes.root}>
        {/* <Grid item md={7} className={classes.image} /> */}
        <Grid item style={{ backgroundColor: "#180c2b" }} md={12}>
          <div style={{ color: "#474745" }} className={classes.paper}>
            <Avatar
              sm={{ width: 86, height: 86 }}
              className={classes.avatar}
              spacing={4}
            ></Avatar>
            <Typography
              className={classes.SignText}
              component="h1"
              variant="h5"
            >
              My Profile
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
            
              style={{ backgroundColor: "#362245" }}
                className={classes.textField}
                InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
                InputProps={{
                  className: classes.input,
                }}
                variant="filled"
                margin="normal"
                value={email}
                color="secondary"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                disabled={!edit}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                helperText={
                  emailValidation(email)
                    ? " "
                    : "Email is not valid"
                }
                error={!emailValidation(email)}
              />
              <br />
              <TextField
               style={{ backgroundColor: "#362245" }}
                className={classes.textField}
                InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
                InputProps={{
                  className: classes.input,
                }}
                variant="filled"
                margin="normal"
                color="secondary"
                fullWidth
                disabled={!edit}
                value={name}
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
              <br />
              <TextField
                    style={{ backgroundColor: "#362245" }}
                className={classes.textField}
                InputLabelProps={{ className: classes.floatingLabelFocusStyle }}
                InputProps={{
                  className: classes.input,
                }}
                variant="filled"
                margin="normal"
                color="secondary"
                fullWidth
                disabled={!edit}
                value={phone}
                id="Phone"
                label="Phone"
                name="Phone"
                autoComplete="Phone"
                autoFocus
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                helperText={
                  phoneValidation(phone)
                    ? " "
                    : "Must begin with 03 and 11 digits"
                }
                error={!phoneValidation(phone)}
           
              />
              <Grid
                container
                justify="flex-end"
                spacing={4}
                style={{ padding: 20 }}
              ></Grid>

              <Grid
                container
                justify="space-around"
                spacing={4}
                style={{ padding: 20 }}
              ></Grid>
              <div >
              <Button className={classes.button} onClick={EditsEnabled}>
                {" "}
                Edit{" "}
              </Button>
              <Button
              disabled={!edit}
               className={classes.button} onClick={()=>allValidation(name,email,phone)}>
                {" "}
                Update{" "}
              </Button>
            
              <Button className={classes.Cpbutton} onClick={handlechange}>
                {" "}
                Change Password{" "}
              </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
