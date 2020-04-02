import React from "react";
import { Consumer } from "../../context";
import Card from "../Layout/Card/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function GeneratedTeam() {
  const containerStyle = {
    padding: "40px 40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "80px",
    border: "1px solid #eee"
  };
  return (
    <Consumer>
      {value => {
        const { selectedTeam, teamDescription } = value;

        return (
          <React.Fragment>
            <h1>The Assembled Team</h1>
            <Typography>{teamDescription}</Typography>
            <Grid style={containerStyle}>
              {selectedTeam.map(currentMember => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                  xl={3}
                  key={currentMember.fields.slug}
                >
                  <Card teamMember={currentMember}></Card>
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}
