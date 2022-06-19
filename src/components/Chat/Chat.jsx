import React ,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Typography from "@material-ui/core/Typography";
import Popup from "reactjs-popup";
import NavigationIcon from "@material-ui/icons/Navigation";
import { hover } from "@testing-library/user-event/dist/hover";
import apiService from "../../services/ApiService"
import "./Chat.css"
import Messages from "./Messages";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    float: "right",
    marginBottom: "10px",
    top: "auto",
    right: "auto",
    position: "fixed",
    bottom: "15px",
    marginLeft: "1550px",
    backgroundColor: "#6d1ba8",
    "&:hover": {
      background: "#5f1694",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    float: "right",
    // position: "fixed",
  },
}));

const Chat = (props) => {
  const classes = useStyles();
  const [chat,setChat]= useState(null)
  const [newMessage, setNewMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
const[user,setUser]=useState(null)
const admin = "628afd313fdfbb446dbf3bbd";
console.log("chat");
console.log(chat)
  //post connection with admin
  const handleconnection = () => {
    apiService.post("/api/chat/create",
      {
        admin: admin,
      }
    ).then((res) => {
      console.log("connection")
      console.log(res.data);
      setChat(res.data._id);
      setUser(res.data.user);
       //console.log(res.data._id)
    }
    );

  }
  
//Get Messages
useEffect(() => {
  const getMessages = async () => {
    try {
      const res = await apiService
        .get(`/api/chat/messages/${chat}`)
        .then((res) => {
          console.log("messages");
          console.log(res.data);
          setMessages(res.data);
        });
    } catch (err) {
      console.log(err);
      setMessages([])
    }
  };
  if (chat) {
    getMessages();
  }
}, [chat]);


const handleSubmit = async (e) => {
  e.preventDefault();
  apiService
    .post("/api/chat/send", {
      sender: user,
      chat: chat,
      content: newMessage,
    })
    .then((data) => {
      console.log(data);
      setMessages([...messages, data.data]);
      setNewMessage("");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};








  return (
    <div>
      <div>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div onClick={handleconnection}>
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                className={classes.margin}
                {...bindTrigger(popupState)}
                
              >
                <NavigationIcon className={classes.extendedIcon} />
                Chat with experts
              </Fab>
              <Popover
                {...bindPopover(popupState)}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 520, left: 1660 }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
              >
                <Box
                  p={4}
                  sx={{
                    height: 650,
                    width: 430,
                    // display: "inline-block",
                    p: 1,
                    mx: 1,
                    bgcolor: "#e6e6e6",
                    color: "background.paper",
                    border: "1px solid",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    borderRadius: 4,
                    
                    // textAlign: "center",
                  }}
                >
                  {/* <Typography sx={{textAlign: "center", marginLeft:"4rem",fontSize: "0.875rem",
                    fontWeight: "700",}}>ok.</Typography> */}
                    <h4>Admin</h4>
                    <hr />
                    <div className="chatBoxTop">
                      {/* <h1>ok</h1> */}
                    {/* <Messages/>
                    <Messages own = {true}/> */}
                    {messages.map((m) => (
                console.log(m.sender),
                <Messages key={m._id} message={m} own={m?.sender?._id === user} />
              ))}
              {/* {messages.map((m) => (
                console.warn(user, m.sender),
                <Messages key={m._id} message={m} own={m?.sender?._id !== user} />
              ))} */}
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              >
                {" "}
              </textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>
                Send
              </button>
            </div>
                            </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </div>
    </div>
  );
};
export default Chat;
