import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

export default function TeamMemberSelected(props) {
  return (
    <div>
      {props.teamMember ? (
        <Card>
          <CardMedia
            style={{
              height: 0,
              paddingTop: "75%",
              backgroundPosition: "top"
            }}
            image={props.teamMember.fields.picture.fields.file.url}
            title={props.teamMember.fields.title}
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {props.teamMember.fields.name}
            </Typography>
            <Typography component="p">
              {props.teamMember.fields.description}
            </Typography>

            <Typography component="p">
              {
                <i
                  className="fas fa-phone-alt"
                  style={{
                    color: "blue",
                    fontSize: "30px",
                    marginLeRight: "40px"
                  }}
                />
              }
              {props.teamMember.fields.phoneNumber}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

TeamMemberSelected.propTypes = {
  teamMember: PropTypes.object.isRequired
};
