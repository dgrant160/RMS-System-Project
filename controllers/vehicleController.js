var person = require('../models/person');
var async = require('async');
exports.index = function (req, res) {
    res.render('testing');
}
exports.vehicle_create_get = function (req, res, next) {
    async.parallel({
        person: function (callback) {
            person.find(callback);
        },
    }, function (err, results) {
        if (err) { return next(err); }
        res.render('vehicle_form', { title: 'Create Vehicle' });
    });
};

exports.vehicle_create_post = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_list = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_delete_post = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_delete_get = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_update_get = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_update_post = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
exports.vehicle_detail = [

    (req, res, next) => {

        var vehicle = new Vehicle(
            {
                license: req.body.license,
                state: req.body.state,
                value: req.body.value,
                color: req.body.color,
                year: req.body.year,
                make: req.body.make,
                body: req.body.body,
                model: req.body.model,
                vin: req.body.vin,
                owner: req.body.owner,
            }
        );

        if (!errors.isEmpty()) {

            res.render('vehicle_form', { title: 'Create Vehicle', vehicle: vehicle, errors: errors.array() });
            return;
        }
        else {

            vehicle.save(function (err) {
                if (err) { return next(err); }

                res.redirect(vehicle.url);
            });
        }
    }
];
