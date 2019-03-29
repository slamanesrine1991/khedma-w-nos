import React, { Component } from "react";
import JobOffer from "../jobOffer";
import { connect } from "react-redux";
import { fetchApplied } from "../../actions/actions";
// import { getStudentProfiles } from '../../actions/profileStudent';
import PropTypes from 'prop-types';


class DashboardAdmin extends Component {
  componentDidMount() {
    this.props.fetchApplied();
    // this.props.getStudentProfiles();
  }

  render() {
    return !this.props.appliedOffers ? (
      "Loading"
    ) : (
      <div>
        <div>
          {this.props.appliedOffers.map(
            el => {
              if (Object.values(el).length) {
                return <JobOffer offer={el} />;
              } else {
                return [];
              }
            }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appliedOffers: state.appliedReducer
});

const fetchAppliedToOffers = () => dispatch => {
    dispatch(fetchApplied());
  };

const mapDispatchToProps = {
  // getStudentProfiles,
  fetchApplied : fetchAppliedToOffers
  }

const ConnectedDashboardAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAdmin);

export default ConnectedDashboardAdmin;


// const mapStateToProps = state => ({
//   profileStudent: state.profileStudent
// });

// export default connect(mapStateToProps, { getStudentProfiles })(ProfilesStudent);
