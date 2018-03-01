import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Clients } from '../../api/stuff/clients.js';


/** Publish the entire contents of the Stuff collection. OK when prototyping. */
Meteor.publish('Clients', function publish() {
  return Clients.find();
});
