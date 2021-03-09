var Vehicle = require('../models/vehicle');
var async = require('async');
var Person = require('../models/person')
// exports.index = function (req, res) {
//     res.render('testing');
// }
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
// exports.incident_detail = function (req, res, next) {
//     Person.findOne({
//         Person: function (callback) {
//             Person.find(callback);
//         },
//         Vehicle: function (callback) {
//             Vehicle.find(callback);
//         },
//     }, function (err, results) {
//         if (err) { return next(err); }
//         //console.log(results.vehicle)
//         res.render('incident_detail', { title: 'Incident detail' });
//     });
// };
exports.incident_create_post = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_update_post = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_delete_post = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_list = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_delete_get = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_update_get = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];
exports.incident_detail = [

    (req, res, next) => {

        var incident = new Incident(
            {
                irn: req.body.irn,
                date: req.body.date,
                location_info: req.body.location_info,
                location_name: req.body.location_name,
                narrative: req.body.narrative,
                officer: req.body.officer,
                badge_number: req.body.badge_number,
                date_of_birth: req.body.date_of_birth,
                report_date: req.body.report_date,
                type: req.body.type,
                related_person: req.body.related_person,
                related_vehicle: req.body.related_vehicle,
            }
        );

        if (!errors.isEmpty()) {
            
            res.render('incident_form', { title: 'Create Incident', incident: incident, errors: errors.array() });
            return;
        }
        else {
            
            incident.save(function (err) {
                if (err) { return next(err); }
                
                res.redirect(incident.url);
            });
        }
    }
];