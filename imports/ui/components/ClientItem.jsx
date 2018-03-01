import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {Clients} from '../../api/stuff/clients.js';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClientItem extends React.Component {
  delete(){
    Clients.remove(this.props.client._id)
  }
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.client.name}</Table.Cell>
          <Table.Cell>
            <Image
              src={this.props.client.image}
              as='a'
              size='small'
              href={this.props.client.image}
              target='_blank'
            />
          </Table.Cell>
          <Table.Cell>
            <Link to={`/editClient/${this.props.client._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <button  onClick={this.delete.bind(this)}>Delete</button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a 'client' document to be passed to this component. */
ClientItem.propTypes = {
  client: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClientItem);
