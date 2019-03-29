import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "rgba(242, 178, 118, 0.7)"
    }
  }
});

export function OutlinedButtons(props) {
  const { classes, skill } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button} size="small">
        {skill}
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

OutlinedButtons = withStyles(styles)(OutlinedButtons);

export class JobOffer extends Component {
  render() {
    const { offer, classes } = this.props;
    return !offer ? (
      "Loading" 
    ) : (
      <div>
        <div className="card offer-card">
          <div className="card-body">
            <div className="offer-card-header">
              <div className="offer-presentation">
                <img
                  src={offer.company.avatar}
                  className="rounded-circle logo"
                  alt="logo"
                />
                <div>
                  <h5 className="card-title">{offer.position}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {offer.company.name}
                  </h6>
                </div>
              </div>
              <BookmarkBorder fontSize="default" />
            </div>
            <div className="offer-card-infos">
              <div className="offer-card-info">
                <h6>{offer.startDate}</h6>
                <p className="text-muted info-title">Date</p>
              </div>
              <div className="offer-card-info">
                <h6>{offer.duration}</h6>
                <p className="text-muted info-title">Durée</p>
              </div>
              <div className="offer-card-info">
                <h6>{offer.pay + " TND"}</h6>
                <p className="text-muted info-title">Salaire</p>
              </div>
              <div className="offer-card-info">
                <h6>{offer.location}</h6>
                <p className="text-muted info-title">Adresse</p>
              </div>
            </div>

            <p className="offer-card-text">{offer.description}</p>
            <div className="offer-card-buttons">
              <div className="offer-card-skills">
                {offer.skills.map(skill => (
                  <OutlinedButtons skill={skill} />
                ))}
              </div>
              <Button
                component={Link}
                to={"/job-offers/" + offer._id}
                className="btn btn-primary default-button"
              >
                Voir détails
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobOffer;
