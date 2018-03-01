import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Clients = new Mongo.Collection('Clients');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ClientsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
  },
  image:{
    label:'Image',
    type:String
  }
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Clients.attachSchema(ClientsSchema);

/** Make the collection and schema available to other code. */
export { Clients, ClientsSchema };
