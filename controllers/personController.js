var vehicle = require('../models/vehicle');
var async = require('async');
exports.index = function (req,res) {
    res.render('testing');
}
exports.person_create_get = function (req, res, next) {
 async.parallel({
         vehicle: function (callback) {
             vehicle.find(callback);
         },
     }, function (err, results) {
         if (err) { return next(err); }
        res.render('person_form', { title: 'Create Person' });
    });    
};

exports.index = function (req, res) {
        res.render('index', { title: 'Login' });
    };