import React, { Component } from "react";
import * as contenful from "contentful";

const Context = React.createContext();
const SPACE_ID = "b94nx19xuhr6";
const ACCESS_TOKEN = "qgnOeCOly8InYlXfoo587F8m2oNGl9VbsrfxO-0tOEQ";
const client = contenful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});
const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_TEAM":
      return {
        ...state,
        selectedTeam: action.payload
      };
    case "GENERATED_TEAM":
      return {
        ...state,
        teamDescription: action.payload
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    team: [],
    selectedTeam: [],
    searchString: "",
    teamDescription: "",
    setSearch: e => {
      if (e.target.value) {
        this.setState({ searchString: e.target.value });
      } else {
        this.setState({ searchString: "" });
      }
      this.getTeam();
    },
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.getTeam();
  }
  onSearchInputChange(e) {
    if (e.target.value) {
      this.setState({ searchString: e.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getTeam();
  }
  getTeam = () => {
    client
      .getEntries({
        content_type: "teamMembers",
        query: this.state.searchString
      })
      .then(res => {
        this.setState({
          team: res.items
        });
      })
      .catch(err => {
        console.log("Error occured while fetching data:", err);
      });
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
