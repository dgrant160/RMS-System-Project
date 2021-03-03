var vehicle = require('../models/vehicle');
exports.index = function (req,res) {
    res.render('testing');
}
exports.incident_create_get = function (req, res, next) {
// async.parallel({
    //     persons: function (callback) {
    //         persons.find(callback);
    //     },
    //     vehicle: function (callback) {
    //         vehicle.find(callback);
    //     },
    // }, function (err, results) {
    //     if (err) { return next(err); }
    //     console.log(results.vehicle)
        res.render('incident_form', { title: 'Create Incident' });
    // });    
};





