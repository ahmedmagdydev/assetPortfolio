import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {Project} from '../../api/stuff/project.js';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ProjectItem extends React.Component {
  delete(){
    console.log(this._id)
    Project.remove(this.props.project._id)
  }
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.project.name}</Table.Cell>
          <Table.Cell>
            <Image
              src={this.props.project.image}
              as='a'
              size='small'
              href={this.props.project.image}
              target='_blank'
            />
          </Table.Cell>
          <Table.Cell>
            <Link to={`/editProject/${this.props.project._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <button  onClick={this.delete.bind(this)}>Delete</button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a 'project' document to be passed to this component. */
ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProjectItem);
