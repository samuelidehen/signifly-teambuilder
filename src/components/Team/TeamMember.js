import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ButtonBase } from "@material-ui/core";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function TeamMember(props) {
  const [selected, setSelected] = useState({ selected: false });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setSelectedTeam = () => {
    setSelected(!selected);
    props.setSelectedTeam();
  };
  return (
    <div>
      {props.teamMember ? (
        <React.Fragment>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              content: { height: "460px", width: "460px", margin: "auto" }
            }}
          >
            <i
              onClick={() => setModalIsOpen(false)}
              className="fas fa-times-circle"
              style={{
                cursor: "pointer",
                color: "white",
                float: "right",
                fontSize: "40px",
                position: "static"
              }}
            />
            <CardMedia
              style={{
                height: 0,
                paddingTop: "56.5%",
                backgroundPosition: "top"
              }}
              image={props.teamMember.fields.picture.fields.file.url}
              title={props.teamMember.fields.title}
            />
            <Typography gutterBottom variant="h3" component="h2">
              {props.teamMember.fields.name}
            </Typography>
            <Typography gutterBottom component="h4">
              {props.teamMember.fields.description}
            </Typography>
            <Typography className="MuiTypography--subheading" variant="caption">
              {props.teamMember.fields.bio}
            </Typography>
          </Modal>
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
              <Button color="primary" onClick={() => setModalIsOpen(true)}>
                Expand Profile
              </Button>
            </CardContent>

            <ButtonBase onClick={setSelectedTeam}>
              <CardActions>
                {selected ? (
                  <i
                    className="fas fa-user-plus"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      fontSize: "30px"
                    }}
                  />
                ) : (
                  <i
                    className="fas fa-check"
                    style={{
                      cursor: "pointer",
                      color: "green",
                      float: "right",
                      fontSize: "30px"
                    }}
                  />
                )}
              </CardActions>
            </ButtonBase>
          </Card>
        </React.Fragment>
      ) : null}
    </div>
  );
}

TeamMember.propTypes = {
  teamMember: PropTypes.object.isRequired,
  setSelectedTeam: PropTypes.func
};
