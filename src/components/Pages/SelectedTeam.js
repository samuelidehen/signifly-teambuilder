import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TeamMemberSelected from "../Team/TeamMemberSelected";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  }
}));

export default function SelectedTeam(props) {
  const classes = useStyles();
  const [valueIn, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value);
  };
  const onGenerateHandler = dispatch => {
    dispatch({
      type: "GENERATED_TEAM",
      payload: valueIn
    });
  };
  return (
    <Consumer>
      {value => {
        const { selectedTeam, dispatch } = value;
        return (
          <React.Fragment>
            <h1>Your Dream Team</h1>
            <Grid container spacing={2} style={{ padding: 24 }}>
              {selectedTeam.map(currentMember => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  xl={3}
                  key={currentMember.fields.slug}
                >
                  <TeamMemberSelected
                    teamMember={currentMember}
                  ></TeamMemberSelected>
                </Grid>
              ))}
            </Grid>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-multiline-static"
                label="Describe your team"
                multiline
                rows="8"
                value={valueIn}
                onChange={handleChange}
                variant="outlined"
              />
            </form>
            <Link
              to="/generated"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                color="primary"
                size="large"
                variant="contained"
                style={{ marginTop: 40, marginBottom: 60 }}
                onClick={onGenerateHandler.bind(this, dispatch)}
              >
                Generate Link
              </Button>
            </Link>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}
