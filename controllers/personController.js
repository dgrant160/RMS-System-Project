var Vehicle = require('../models/vehicle');
var async = require('async');
var Person = require('../models/person');
exports.index = function (req,res) {
    res.render('testing');
}
exports.person_create_get = function (req, res, next) {
//  async.parallel({
//          vehicle: function (callback) {
//              vehicle.find(callback);
//          },
//      }, function (err, results) {
//          if (err) { return next(err); }
         res.render('person_form', { title: 'Create Person' });
//     });    
};

exports.index = function (req, res) {
        res.render('index', { title: 'Login' });
    };

    exports.person_create_post = [

        (req, res, next) => {
            console.log("hi")
            var person = new Person(
                {
                    name: req.body.name,
                    ssn: req.body.ssn,
                    hazard: req.body.hazard,
                    gender: req.body.gender,
                    race: req.body.race,
                    eye: req.body.eye,
                    hair: req.body.hair,
                    date_of_birth: req.body.date_of_birth,
                    age: req.body.age,
                    height: req.body.height,
                    weight: req.body.weight,
                    scars_marks_tattoos: req.body.scars_marks_tattoos,
                    address: req.body.address,
                    phone: req.body.phone,
                    gang_affiliation: req.body.gang_affiliation,
                    mugshot: req.body.mugshot,
                }
            );
                
            //  if (!errors.isEmpty()) {
                
            //      res.render('person_form', { title: 'Create Person', person: person, errors: errors.array() });
            //      return;
            //  }
            //  else {
                
                person.save(function (err) {
                    if (err) { return next(err);}
                    
                    res.redirect(person.url);
                });
            }
        //}
    ];
    