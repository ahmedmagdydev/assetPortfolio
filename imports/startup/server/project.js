import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Project } from '../../api/stuff/project.js';


/** Publish the entire contents of the Stuff collection. OK when prototyping. */
Meteor.publish('Project', function publish() {
  return Project.find();
});
