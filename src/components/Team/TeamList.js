import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TeamMember from "./TeamMember";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

let selectedTeam = [];
class TeamList extends Component {
  checkSelectedTeam = team => {
    if (selectedTeam.some(person => person.fields.name === team.fields.name)) {
      selectedTeam.splice(selectedTeam.indexOf(team), 1);
    } else {
      selectedTeam.push(team);
    }
  };
  handleSelectedTeam = team => {
    this.checkSelectedTeam(team);
  };
  updateSelectedTeam = dispatch => {
    dispatch({
      type: "SELECTED_TEAM",
      payload: selectedTeam
    });
    selectedTeam = [];
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { team, searchString, setSearch, dispatch } = value;

          return (
            <div>
              {team ? (
                <div>
                  <TextField
                    style={{ padding: 40, width: 400 }}
                    id="searchInput"
                    placeholder="Search for a team member"
                    margin="normal"
                    onChange={setSearch}
                  />

                  {searchString === "" ? (
                    <div>
                      <h1>Consultants</h1> click on {"  "}
                      <i
                        className="fas fa-user-plus"
                        style={{
                          cursor: "pointer",
                          color: "black",

                          fontSize: "20px"
                        }}
                      />
                      {"  "}
                      to Add Team Member
                    </div>
                  ) : null}
                  <Grid container spacing={2} style={{ padding: 24 }}>
                    {team.map(currentMember =>
                      currentMember.fields.department === "Consultant" ? (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          lg={3}
                          xl={3}
                          key={currentMember.fields.slug}
                        >
                          <TeamMember
                            setSelectedTeam={this.handleSelectedTeam.bind(
                              this,
                              currentMember
                            )}
                            teamMember={currentMember}
                          ></TeamMember>
                        </Grid>
                      ) : null
                    )}
                  </Grid>

                  {searchString === "" ? <h1>Software Developers</h1> : null}
                  <Grid container spacing={2} style={{ padding: 24 }}>
                    {team.map(currentMember =>
                      currentMember.fields.department === "Tech" ? (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          lg={3}
                          xl={3}
                          key={currentMember.fields.slug}
                        >
                          <TeamMember
                            setSelectedTeam={this.handleSelectedTeam.bind(
                              this,
                              currentMember
                            )}
                            teamMember={currentMember}
                          ></TeamMember>
                        </Grid>
                      ) : null
                    )}
                  </Grid>
                  {searchString === "" ? <h1>Designers</h1> : null}
                  <Grid container spacing={2} style={{ padding: 24 }}>
                    {team.map(currentMember =>
                      currentMember.fields.department === "Designer" ? (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          lg={3}
                          xl={3}
                          key={currentMember.fields.slug}
                        >
                          <TeamMember
                            setSelectedTeam={this.handleSelectedTeam.bind(
                              this,
                              currentMember
                            )}
                            teamMember={currentMember}
                          ></TeamMember>
                        </Grid>
                      ) : null
                    )}
                  </Grid>
                  {searchString === "" ? <h1>Innovators</h1> : null}
                  <Grid container spacing={2} style={{ padding: 24 }}>
                    {team.map(currentMember =>
                      currentMember.fields.department === "Innovator" ? (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          lg={3}
                          xl={3}
                          key={currentMember.fields.slug}
                        >
                          <TeamMember
                            setSelectedTeam={this.handleSelectedTeam.bind(
                              this,
                              currentMember
                            )}
                            teamMember={currentMember}
                          ></TeamMember>
                        </Grid>
                      ) : null
                    )}
                  </Grid>

                  <Link
                    to="/selected"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      color="primary"
                      size="large"
                      variant="contained"
                      style={{ marginTop: 40, marginBottom: 60 }}
                      onClick={this.updateSelectedTeam.bind(this, dispatch)}
                    >
                      Confirm Selection
                    </Button>
                  </Link>
                </div>
              ) : (
                "No Team member with that Name Found"
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default TeamList;
