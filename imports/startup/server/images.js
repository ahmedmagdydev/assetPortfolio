import {Images} from '../../api/stuff/images.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Images', function publish() {
  return Images.find();
});


Meteor.publish('ProjectImages', function publish() {
  return ProjectImages.find();
});