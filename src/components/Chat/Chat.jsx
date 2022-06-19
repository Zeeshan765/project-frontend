import React from "react";
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

  return (
    <div>
      <div>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
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
                    height: 450,
                    width: 320,
                    display: "inline-block",
                    p: 1,
                    mx: 1,
                    bgcolor: "#e6e6e6",
                    color: "background.paper",
                    border: "1px solid",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    borderRadius: 4,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  <Typography>The content of the Popover.</Typography>
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
