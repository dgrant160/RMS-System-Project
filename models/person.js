var mongoose = require('mongoose');
var faker = require('faker');
const { select } = require('async');


var Schema = mongoose.Schema;

var PersonSchema = new Schema({
        name: { type: String, required: true},
        ssn : {type: String, required: true},
        hazard: { type: String},
        gender: { type: String, required: true,},
        race: { type: String, required: true},
        eye: { type: String, required: true},
        hair: { type: String, required: true},
        date_of_birth: { type: Date, required: true},
        age: { type: String, required: true},
        scars_marks_tattoos: { type: String, required: true},
        height: { type: String, required: true},
        weight: { type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        gang_affiliation : {type: String, required: true,},
        mugshot: { type: String, required: true}
});

PersonSchema.virtual('url').get(function () {
    return '/catalog/person/' + this._id;
});
module.exports = mongoose.model('Person', PersonSchema);