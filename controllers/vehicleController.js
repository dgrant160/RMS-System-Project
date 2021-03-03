var person = require('../models/person');
exports.index = function (req,res) {
    res.render('testing');
}
exports.vehicle_create_get = function (req, res, next) {
// async.parallel({
//         person: function (callback) {
//             person.find(callback);
//         },
//     }, function (err, results) {
//        if (err) { return next(err); }
        res.render('vehicle_form', { title: 'Create Vehicle' });
//    });    
};