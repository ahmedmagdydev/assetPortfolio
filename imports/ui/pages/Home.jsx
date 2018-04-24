import React from 'react';
import { Meteor } from 'meteor/meteor';

import Solutions from '../components/solutions';



/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Home extends React.Component {
  render() {
    
    return (
    	<div>
    		<Solutions/>
    	</div>
    );
  }
}
