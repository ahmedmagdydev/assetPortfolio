import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Home extends React.Component {
  render() {
    
    return (
      <Header as="h2" textAlign="center">
        <p>this is the home of asset's portfolio</p>
      </Header>
    );
  }
}
