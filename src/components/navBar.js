import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Bookmark from "@material-ui/icons/Bookmark";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOffers } from "../actions/actions";
import { logoutStudent } from "../actions/authAction";
import { logoutCompany } from "../actions/authCompanyAction";
import { logoutAdmin } from "../actions/authAdminAction";
import { clearCurrentProfileStudent } from "../actions/profileStudent";
import { clearCurrentProfileCompany } from "../actions/profileCompanyAction";
import { clearCurrentAdmin } from "../actions/authAdminAction";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    minWidth: "150px"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 64,
    minHeight: "fit-content",
    backgroundColor: "#079681"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    minWidth: "fit-content",
    fontSize: "20px",
    "&:hover": {
      color: "white",
      backgroundColor: "transparent"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    margin: theme.spacing(2),
    width: 250,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing,
    paddingRight: theme.spacing,
    paddingBottom: theme.spacing,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, title, features } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className="navbar-button"
          >
            {title}
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {features.map(el => (
                        <MenuItem
                          // onClick={()=> {
                          //   this.handleClose(); el.click()
                          // }}
                          onClick={el.click}
                          component={Link}
                          to={el.to}
                        >
                          {el.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

MenuListComposition = withStyles(styles)(MenuListComposition);

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfileStudent();
    this.props.logoutStudent();
  };
  onLogoutAdminClick = e => {
    e.preventDefault();
    this.props.clearCurrentAdmin();
    this.props.logoutAdmin();
  };

  onLogoutCompanyClick = event => {
    event.preventDefault();
    this.props.clearCurrentProfileCompany();
    this.props.logoutCompany();
  };

  render() {
    const { classes, fetchOffers } = this.props;
    const { isAuthenticated, student } = this.props.auth;
    const { isTestify, admin } = this.props.authAdmin;
    const { isAuthorize, company } = this.props.authCompany;

    const authLinks = (
      <div>
        <a href="" onClick={this.onLogoutClick} className="nav-link">
          <img
            className="rounded-circle"
            src={student.avatar}
            alt={student.name}
            style={{ width: "25px", marginRight: "10px" }}
          />
          logout
        </a>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Button
              component={Link}
              to="/"
              className={classes.title}
              color="inherit"
            >
              Khedma W Nos
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>

            <nav className="navbar-expand-sm">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-nav"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
            </nav>
            <div className={classes.grow} />
            <div className="navbar-elements">
              {isTestify ? (
                <Button
                  component={Link}
                  to="/profiles-student"
                  className="navbar-button"
                >
                  Students
                </Button>
              ) : (
                ""
              )}
              {isTestify ? (
                <Button
                  component={Link}
                  to="/profiles-company"
                  className="navbar-button"
                >
                  Companies
                </Button>
              ) : (
                ""
              )}

              {isAuthenticated || isTestify ? (
                <Button
                  component={Link}
                  to="/job-offers"
                  className="navbar-button"
                  onClick={fetchOffers}
                >
                  Offres
                </Button>
              ) : (
                ""
              )}
              {isAuthenticated ? (
                <div>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <Bookmark />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </div>
              ) : (
                ""
              )}

              {isTestify ? (
                ""
              ) : isAuthenticated ? (
                <MenuListComposition
                  title="Account"
                  features={[
                    { to: "/dashboard", title: "Dashboard", click: () => {} },
                    { to: "", title: "Log out", click: this.onLogoutClick }
                  ]}
                />
              ) : isAuthorize ? (
                ""
              ) : (
                <MenuListComposition
                  title="espace étudiant"
                  features={[
                    { to: "/register", title: "Sign Up", click: () => {} },
                    { to: "/login", title: "Login", click: () => {} }
                  ]}
                />
              )}

              {isTestify ? (
                ""
              ) : isAuthorize ? (
                <MenuListComposition
                  title="Account"
                  features={[
                    {
                      to: "/dashboardCompany",
                      title: "Dashboard Company",
                      click: () => {}
                    },
                    {
                      to: "",
                      title: "Log out Company",
                      click: this.onLogoutCompanyClick
                    }
                  ]}
                />
              ) : isAuthenticated ? (
                ""
              ) : (
                <MenuListComposition
                  title="espace entreprise"
                  features={[
                    {
                      to: "/registerCompany",
                      title: "Sign Up Company",
                      click: () => {}
                    },
                    {
                      to: "/loginCompany",
                      title: "Login Company",
                      click: () => {}
                    }
                  ]}
                />
              )}
              {isTestify ? (
                <Button
                  className="navbar-button"
                  component={Link}
                  to={"/dashboardAdmin"}
                >
                  Dashboard
                </Button>
              ) : (
                ""
              )}
              {isTestify ? (
                <Button
                  className="navbar-button"
                  onClick={this.onLogoutAdminClick}
                >
                  Log out
                </Button>
              ) : (
                ""
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  authAdmin: state.authAdmin,
  authCompany: state.authCompany
});
const fetchOffers2 = () => dispatch => {
  dispatch(fetchOffers());
};
const mapDispatchToProps = {
  fetchOffers: fetchOffers2,
  logoutStudent,
  logoutCompany,
  logoutAdmin,
  clearCurrentProfileCompany,
  clearCurrentProfileStudent,
  clearCurrentAdmin
};

const ConnectedPrimarySearchAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);

export default (PrimarySearchAppBar = withStyles(styles)(
  ConnectedPrimarySearchAppBar
));
