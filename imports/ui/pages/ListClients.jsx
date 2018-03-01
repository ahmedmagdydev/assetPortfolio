import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Clients } from '/imports/api/stuff/clients';
import ClientItem from '/imports/ui/components/ClientItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClients extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container text>
          <Header as='h1'>List Clients</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
                <Table.HeaderCell>delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.clients.map((client) => <ClientItem key={client._id} client={client} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClients.propTypes = {
  clients: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clients');
  return {
    clients: Clients.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClients);
