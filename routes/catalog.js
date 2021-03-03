var express = require('express');
var router = express.Router();

// Require controller modules.
var incident_controller = require('../controllers/incidentController');
var person_controller = require('../controllers/personController');
var vehicle_controller = require('../controllers/vehicleController');

/// person ROUTES ///

// GET catalog home page.
//router.get('/', persons_controller.index);

// // GET request for creating a person. NOTE This must come before routes that display person (uses id).
 router.get('/person/create', person_controller.person_create_get);

// // POST request for creating person.
// router.post('/person/create', person_controller.person_create_post);

// // GET request to delete person.
// router.get('/person/:id/delete', person_controller.person_delete_get);

// // POST request to delete person.
// router.post('/person/:id/delete', person_controller.person_delete_post);

// // GET request to update person.
// router.get('/person/:id/update', person_controller.person_update_get);

// // POST request to update person.
// router.post('/person/:id/update', person_controller.person_update_post);

// // GET request for one person.
// router.get('/person/:id', person_controller.person_detail);

// // GET request for list of all person items.
// router.get('/persons', person_controller.person_list);

// /// incident ROUTES ///

// // GET request for creating incident. NOTE This must come before route for id (i.e. display incident).
router.get('/incident/create', incident_controller.incident_create_get);

// // POST request for creating incident.
// router.post('/incident/create', incident_controller.incident_create_post);

// // GET request to delete incident.
// router.get('/incident/:id/delete', incident_controller.incident_delete_get);

// // POST request to delete incident.
// router.post('/incident/:id/delete', incident_controller.incident_delete_post);

// // GET request to update incident.
// router.get('/incident/:id/update', incident_controller.incident_update_get);

// // POST request to update incident.
// router.post('/incident/:id/update', incident_controller.incident_update_post);

// // GET request for one incident.
// router.get('/incident/:id', incident_controller.incident_detail);

// // GET request for list of all incidents.
// router.get('/incidents', incident_controller.incident_list);

// /// vehicle ROUTES ///

// // GET request for creating a vehicle. NOTE This must come before route that displays vehicle (uses id).
router.get('/vehicle/create', vehicle_controller.vehicle_create_get);

// //POST request for creating vehicle.
// router.post('/vehicle/create', vehicle_controller.vehicle_create_post);

// // GET request to delete vehicle.
// router.get('/vehicle/:id/delete', vehicle_controller.vehicle_delete_get);

// // POST request to delete vehicle.
// router.post('/vehicle/:id/delete', vehicle_controller.vehicle_delete_post);

// // GET request to update vehicle.
// router.get('/vehicle/:id/update', vehicle_controller.vehicle_update_get);

// // POST request to update vehicle.
// router.post('/vehicle/:id/update', vehicle_controller.vehicle_update_post);

// // GET request for one vehicle.
// router.get('/vehicle/:id', vehicle_controller.vehicle_detail);

// // GET request for list of all vehicle.
// router.get('/vehicles', vehicle_controller.vehicle_list);

module.exports = router;