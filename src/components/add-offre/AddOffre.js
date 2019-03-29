import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addOffre } from '../../actions/profileCompanyAction';

class AddOffre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      location: '',
      position: '',
      duration: '',
      pay: '',
      field:'',
      date:'',
      description: '',
      skills:'',
      startDate:'',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const offreData = {
      handle: this.state.handle,
      location: this.state.location,
      position: this.state.position,
      duration: this.state.duration,
      pay: this.state.pay,
      field:this.state.field,
      date:this.state.date,
      description: this.state.description,
      skills:this.state.skills,
      startDate:this.state.startDate,
    
    };

    this.props.addOffre(offreData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboardCompany" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Offre</h1>
              
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Title"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                />
                <TextFieldGroup
                  placeholder="* position"
                  name="position"
                  value={this.state.positio}
                  onChange={this.onChange}
                  error={errors.position}
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                 <TextFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                
                <TextFieldGroup
                 placeholder="Start date"
                  name="startDate"
                  type="date"
                  value={this.state.startDate}
                  onChange={this.onChange}
                  error={errors.startDate}
                />
                <TextFieldGroup
                  placeholder="Duration"
                  name="duration"
                  value={this.state.duration}
                  onChange={this.onChange}
                  error={errors.duration}
                />
               
                <TextAreaFieldGroup
                  placeholder="Pay"
                  name="pay"
                  value={this.state.pay}
                  onChange={this.onChange}
                  error={errors.pay}
                />
                 <TextAreaFieldGroup
                  placeholder="Field"
                  name="field"
                  value={this.state.field}
                  onChange={this.onChange}
                  error={errors.field}
                />
                 <TextAreaFieldGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddOffre.propTypes = {
  AddOffre: PropTypes.func.isRequired,
  profileCompony: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileCompony: state.profileCompony,
  errors: state.errors
});

export default connect(mapStateToProps, { addOffre })(
  withRouter(AddOffre)
);
