import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { OutlinedButtons } from "./jobOffer";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { getStudentProfiles } from "../actions/profileStudent";
import { Link } from "react-router-dom";

const styles = theme => ({
  avatar: {
    border: 1,
    borderColor: "lightgrey",
    borderStyle: "solid",
    width: 90,
    height: 90,
    marginRight: 10
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

class JobPresentation extends React.Component {
  componentDidMount() {
    this.props.getStudentProfiles();
  }
  appliedToOffer = applied => {
    axios
      .post(`/api/companyoffre/candidate/${applied}`)
      .then(res => console.log(res));
  };
  render() {
    const props = this.props;
    const { classes, offer, companyProfile } = props;
    const { isAuthenticated, student } = this.props.auth;
    const { isTestify, admin } = this.props.authAdmin;
    return !(this.props.profileStudent && offer && companyProfile) ? (
      "Loading"
    ) : (
      <Card className="job-presentation-card">
        <div className="job-presentation">
          <div className="job-presentation-header">
            <div>
              <Typography variant="h5">{offer.position}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {offer.field}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="h6">
                {offer.date}
              </Typography>
            </div>
          </div>

          <CardContent className="job-presentation-body">
            <div className="offer-card-infos job-presentation-section">
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
            <Typography component="p" className="job-presentation-section">
              <Typography>Description :</Typography>
              <br />
              {offer.description}
            </Typography>
            <div>
              <Typography>Compétences requises :</Typography>
              <div className="offer-card-skills">
                {offer.skills.map(skill => (
                  <OutlinedButtons skill={skill} />
                ))}
              </div>
            </div>
          </CardContent>
          <CardContent className="job-presentation-footer">
            <div className="job-presentation-buttons">
              {isAuthenticated ? (
                <div className="icon-margin">
                  <IconButton aria-label="Add to favorites">
                    <BookmarkBorder className="save-icon" />
                  </IconButton>
                </div>
              ) : (
                ""
              )}
              {isAuthenticated ? (
                <Button
                  className="btn btn-primary default-button"
                  onClick={() => {
                    this.appliedToOffer(offer._id);
                  }}
                >
                  Postuler
                </Button>
              ) : (
                ""
              )}
              {isTestify ? (
                <div>
                  {offer.candidate[0] ? (
                    offer.candidate
                      .map(el =>
                        this.props.profileStudent.find(
                          element => element.student._id === el._id
                        )
                      )
                      .map(el => (
                        <Button
                          component={Link}
                          to={`/studentprofile/${el.handle}`}
                        >
                          {el.handle}
                        </Button>
                      ))
                  ) : (
                    <Button>No applicants yet</Button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </CardContent>
        </div>
        <div className="card-company-presentation">
          <div>
            <div className="card-company-presentation-header">
              <Avatar
                src={offer.company.avatar}
                aria-label="Offer"
                className={classes.avatar}
              />
              <div className="card-company-presentation-infos">
                <h5 className="card-company-presentation-info">
                  {offer.company.name}
                </h5>
                <a
                  className="card-company-presentation-info"
                  href={companyProfile.website}
                  target="_blank"
                >
                  Website
                </a>
                <p className="card-company-presentation-info">
                  {companyProfile.company.phoneNumber}
                </p>
                <p className="card-company-presentation-info">
                  {companyProfile.company.adress}
                </p>
                <div>
                  {companyProfile.social
                    ? (Boolean(companyProfile.social.facebook) ? (
                        <a
                          href={companyProfile.social.facebook}
                          target="_blank"
                        >
                          <img src="https://img.icons8.com/material/24/000000/facebook.png" />
                        </a>
                      ) : (
                        ""
                      ),
                      Boolean(companyProfile.social.twitter) ? (
                        <a href={companyProfile.social.twitter} target="_blank">
                          <img src="https://img.icons8.com/material/24/000000/twitter.png" />
                        </a>
                      ) : (
                        ""
                      ),
                      Boolean(companyProfile.social.instagram) ? (
                        <a
                          href={companyProfile.social.instagram}
                          target="_blank"
                        >
                          <img src="https://img.icons8.com/material/24/000000/instagram-new.png" />
                        </a>
                      ) : (
                        ""
                      ),
                      Boolean(companyProfile.social.linkedin) ? (
                        <a
                          href={companyProfile.social.linkedin}
                          target="_blank"
                        >
                          <img src="https://img.icons8.com/material/24/000000/linkedin.png" />
                        </a>
                      ) : (
                        ""
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <Typography>
            <br />
            <Typography variant="h6" component="h6">
              Description :
            </Typography>
            <br />
            {companyProfile.description}
          </Typography>
          {/* {console.log(
            offer.candidate.map(el =>
              this.props.profileStudent.find(
                element => element.student._id === el._id
              )
            ).map(el => <Link to={`/studentprofile/${el.handle}`}>{el.handle}</Link>)
          )} */}
          {/* {console.log(offer.candidate[0]._id)}
          {console.log(
            this.props.profileStudent[0].student._id
          )}
          {console.log(
            this.props.profileStudent.find(
              el => el.student._id === offer.candidate[0]._id
            )
          )} */}
        </div>
      </Card>
    );
  }
}

JobPresentation.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  getStudentProfiles
};

const mapStateToProps = (state, { id }) => {
  const offer = state.offersReducer.find(el => el._id === id);
  return {
    offer,
    auth: state.auth,
    authAdmin: state.authAdmin,
    companyProfile:
      offer &&
      state.companiesReducer.find(el => el.company.name === offer.company.name),
    profileStudent: state.profileStudent.profilesStudent
  };
};

const ConnectedJobPresentation = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPresentation);

export default (JobPresentation = withStyles(styles)(ConnectedJobPresentation));
