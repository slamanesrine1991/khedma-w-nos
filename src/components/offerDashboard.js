import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
// side menu
// import { mainListItems, secondaryListItems } from "./listItems";
import JobOffer from "./jobOffer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "0 auto"
  },

  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Dashboard extends React.Component {
  render() {
    const { classes, jobOffers } = this.props;

    return (
      <div className={classes.root}>
        {/* <Drawer className="side-menu"
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          <div className={classes.toolbarIcon} />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
          <Divider />
        </Drawer> */}
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            Offres de travail
          </Typography>
          <div>
            {jobOffers.map(el => (
              <JobOffer offer={el} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  jobOffers: state.offersReducer
});

const ConnectedDashboard = connect(
  mapStateToProps,
)(Dashboard);

export default withStyles(styles)(ConnectedDashboard);
