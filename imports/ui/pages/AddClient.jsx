import React from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';
import { Clients, ClientsSchema } from '/imports/api/stuff/clients';
import { Bert } from 'meteor/themeteorchef:bert';
import { _ } from 'meteor/underscore';
// import Dropzone  from 'react-dropzone';
import {Images,ProjectImages} from '../../../imports/api/stuff/images.js';

/** Renders the Page for adding a Stuff document. */
class AddClient extends React.Component {

  /* Keep track of the state of all of the form controls. */
  state = { name: '', image: ''}




  /* When anything changes in a form control, update the associated state field. */
  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  /* When the user clicks the submit button, check the data for validity and add it to the collection if valid. */
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, image } = this.state;
    // Validate form fields. See https://github.com/aldeed/simple-schema-js#validating-data
    const schemaContext = ClientsSchema.newContext();
    const cleanData = ClientsSchema.clean({ name, image });
    schemaContext.validate(cleanData);
    const alertData = {};
    if (schemaContext.isValid()) {
      Clients.insert(cleanData);
      alertData.message = `Added ${name} with image ${image}`;
      alertData.type = 'success';
      this.setState({ name: '', image: '' });
    } else {
      const errors = _.map(schemaContext.validationErrors(), error => schemaContext.keyErrorMessage(error.name));
      alertData.message = `Add failed: ${errors}`;
      alertData.type = 'danger';
      alertData.hideDelay = 5000;
    }
    // Notify the user of success or failure. See https://themeteorchef.com/tutorials/client-side-alerts-with-bert
    Bert.alert(alertData);
  }

  handleUpload = (event,{name}) => {
   
    let self = this;
        const file = event.currentTarget.files[0];
    if (file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err,result){
        if(err){
          console.log(err)
        }else{
          const imageLoc = '/cfs/files/Images/'+result._id;
          self.setState({ image: imageLoc })
        }
      })
    }
  }

  /** Render the page, providing default values for form fields. */
  render() {
    const { name, image } = this.state;
    return (
        <Container text>
          <Segment.Group>
            <Segment attached='top' inverted color='grey'>Add Stuff</Segment>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input required label='Name' name='name' value={name} onChange={this.handleChange}/>
                <Form.Input type="file" required label='Image' name='image' onChange={this.handleUpload}/>


                <Button type='submit'>Submit</Button>
              </Form>
            </Segment>
          </Segment.Group>
        </Container>
    );
  }
}

export default AddClient;
