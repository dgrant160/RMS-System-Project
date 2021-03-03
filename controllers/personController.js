var vehicle = require('../models/vehicle');
exports.index = function (req,res) {
    res.render('testing');
}
exports.person_create_get = function (req, res, next) {
// async.parallel({
//         vehicle: function (callback) {
//             vehicle.find(callback);
//         },
//     }, function (err, results) {
//         if (err) { return next(err); }
//         console.log(results.vehicle)
        res.render('person_form', { title: 'Create Person' });
//    });    
};