/**
 * Vehicles Collection. This collection will be the master controller of every vehicle that goes to and from the server.
 * It will control creating/updating/deleting of the buses
 * @type {Collection}
 */
Vehicles = new Meteor.collection('Vehicles');


Vehicles.allow({
	insert: function() {
		return Meteor.isServer;
	},
	update: function() {
		return Meteor.isServer;
	},
	remove: function() {
		return Meteor.isServer;
	}
});


Meteor.methods({
	createVehicle: function(vehicle) {
		Vehicles.insert(vehicle);
	},
	removeVehicle: function(vehicle) {
		Vehicles.remove(vehicle._id);
	},
	updateVehicle: function(vehicle) {
		Vehicles.upsert(vehicle);
	}
})