import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import {Grid, Row, Col} from 'react-bootstrap';
import './bootstrap.min.css';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SiteHeader extends React.Component {
  render() {
    const headerStyle = { background: 'url("/images/header.png") no-repeat',
                          height:840,
                          backgroundSize: '100%',
                          padding:'35px 0' };
    return (
      <div className="header" style={headerStyle}>
        <Grid>
          <Row>
            <Col md={3}>
              <img src="/images/logo.png" alt=""/>
            </Col>
            <Col md={9}>
              <ul className="list-inline text-right">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Team  </a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
              </ul>
            </Col>
          </Row>
          
        </Grid>
      </div>
      
    );
  }
}

/** Declare the types of all properties. */
SiteHeader.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const SiteHeaderContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(SiteHeader);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(SiteHeaderContainer);
