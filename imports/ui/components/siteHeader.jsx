import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import {Grid, Row, Col} from 'react-bootstrap';
import styled from 'styled-components'

import './bootstrap.min.css';
import Carousel from './headSlider'


const Item = styled.div`
  color: white;
  height: 300px;
`
const MainHead = styled.div`
  background: url("/images/header.png") no-repeat;
  height:840px;
  background-size: 100%;
  padding:35px 0 ;
`
const LargeText = styled.div`
font-size:70px;
    font-weight: lighter;
    background:url(images/large-text.png) no-repeat bottom left -9px;
    padding-bottom:40px;
    margin-bottom:12px;
`
/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SiteHeader extends React.Component {
  render() {

    return (
      <MainHead className="header" >
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
          <Row>
            <Col md={6}>
              <Carousel title="Carousel">
                <Item>
                  <LargeText><b>Website</b> Designs</LargeText> 
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                </Item>
                <Item>
                  <LargeText><b>Website</b> Designs</LargeText> 
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                </Item>
                <Item>
                  <LargeText><b>Website</b> Designs</LargeText> 
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                  <p>We are greatly thrilled to announce another achievement to be added to our legacy of excellence.</p>
                </Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>

      </MainHead>
      
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
