var mongoose = require('mongoose');
var faker = require('faker');


var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    first_name: {type: String, required: true, maxlength: 100},
    reporting_person:{type: String, maxlength: 100},
    witness: {type: String, required: true, maxlength: 100},
    victum: {type: String, required: true, maxlength: 100},
    investigative_lead:{type: String, required: true, maxlength: 100},
    Suspect: {type: String, required: true, maxlength: 100},
    race:{type: String, required: true, maxlength: 100},
    gender:{type: String, required: true, maxlength: 100},
    height:{type: String, required: true, maxlength: 3},
    weight:{type: String, required: true, maxlength: 3}
});
