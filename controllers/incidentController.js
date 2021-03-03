var vehicle = require('../models/vehicle');
var async = require('async');
var person = require('../models/person')
exports.index = function (req,res) {
    res.render('testing');
}
exports.incident_create_get = function (req, res, next) {
 async.parallel({
         person: function (callback) {
             person.find(callback);
         },
         vehicle: function (callback) {
             vehicle.find(callback);
         },
     }, function (err, results) {
         if (err) { return next(err); }
        res.render('incident_form', { title: 'Create Incident' });
     });    
};





