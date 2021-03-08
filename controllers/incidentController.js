var Vehicle = require('../models/vehicle');
var async = require('async');
var Person = require('../models/person')
exports.index = function (req, res) {
    res.render('testing');
}
exports.incident_create_get = function (req, res, next) {
    async.parallel({
        Person: function (callback) {
            Person.find(callback);
        },
        Vehicle: function (callback) {
            Vehicle.find(callback);
        },
    }, function (err, results) {
        if (err) { return next(err); }
        res.render('incident_form', { title: 'Create Incident' });
    });
};
exports.incident_detail = function (req, res, next) {
    Person.findOne({
        Person: function (callback) {
            Person.findbyId(callback);
        },
        Vehicle: function (callback) {
            Vehicle.findbyId(callback);
        },
    }, function (err, results) {
        if (err) { return next(err); }
        //console.log(results.vehicle)
        res.render('incident_detail', { title: 'Incident detail' });
    });
};




