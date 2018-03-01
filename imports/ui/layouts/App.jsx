import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListProject from '../pages/ListProject';
import ListClients from '../pages/ListClients'
import AddProject from '../pages/AddProject';
import AddClient from '../pages/AddClient';
import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import EditProject from '../pages/EditProject';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import Home from '../pages/Home';



/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {

 

  render() {
    return (
        <Router>
          <div>
            <Switch>
              <SiteRoute exact path="/" component={Home}/>
              <DashboardRoute path="/Landing" component={Landing}/>
              <DashboardRoute path="/signin" component={Signin}/>
              <DashboardRoute path="/signup" component={Signup}/>
              <DashboardRoute path="/list" component={ListStuff}/>
              <DashboardRoute path="/add" component={AddStuff}/>
              <DashboardRoute path="/projects" component={ListProject}/>
              <DashboardRoute path="/clients" component={ListClients}/>
              <DashboardRoute path="/addProjects" component={AddProject}/>
              <DashboardRoute path="/addClient" component={AddClient}/>
              <DashboardRoute path="/edit/:_id" component={EditStuff}/>
              <DashboardRoute path="/editProject/:_id" component={EditProject}/>
              <DashboardRoute path="/signout" component={Signout}/>
              <SiteRoute path="*" component={NotFound}/>

             

            </Switch>
          </div>
        </Router>
    );
  }
}


const SiteLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <div className="main">{children}</div>
      <Footer/>
    </div>
        

  )
}
const SiteRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <SiteLayout>
          <Component {...matchProps} />
      </SiteLayout>
    )} />
  )
};
 const DashboardLayout = ({children, ...rest}) => {
    return (
      <div>
        <NavBar/>
        <div className="main">{children}</div>
        <Footer/>
      </div>
    )
  }

  const DashboardRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={(matchProps) => {
        const isLogged = Meteor.userId() !== null;
        if (isLogged || matchProps.location.pathname=='/signin' || matchProps.location.pathname=='/signup') {
          return(
         <DashboardLayout>
            <Component {...matchProps} />
        </DashboardLayout>)
        }else{
          return(
         <DashboardLayout>
        <Redirect to={{ pathname: '/signin', state: { from: matchProps.location } }}/>
        </DashboardLayout>)
      }
     }}/>
    )
  };


/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
