import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Offre extends Component {
 
  render() {
    const offre = this.props.offre.map(exp => (
      <tr key={exp._id}>
        <td>{exp.handle}</td>
        <td>{exp.position}</td>
        <td>
         {exp.skills}
        </td>
        <td>
         
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {offre}
          </thead>
        </table>
      </div>
    );
  }
}



export default connect(null)(Offre);
