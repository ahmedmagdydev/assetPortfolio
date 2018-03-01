import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Project } from '/imports/api/stuff/project';
import ProjectItem from '/imports/ui/components/ProjectItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProject extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container text>
          <Header as='h1'>List Projects</Header>
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
              {this.props.projects.map((project) => <ProjectItem key={project._id} project={project} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListProject.propTypes = {
  projects: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Project');
  return {
    projects: Project.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProject);
