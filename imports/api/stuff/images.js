

export const Images = new FS.Collection("Images",{
	stores: [new FS.Store.GridFS("Images")],
	filter: {
	    maxSize: 1048576, // in bytes
	    allow: {
	      contentTypes: ['image/*'],
	      extensions: ['png','jpg','jpeg']
	    },
	    onInvalid: function (message) {
	      if (Meteor.isClient) {
	        alert(message);
	      } else {
	        console.log(message);
	      }
	    }
	  }
});
