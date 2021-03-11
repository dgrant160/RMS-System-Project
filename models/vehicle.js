var mongoose = require('mongoose');
var faker = require('faker');


var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    license: { type: String, required: true, maxlength: 100 },
    color: { type: String, required: true, maxlength: 100 },
    year: { type: String, required: true, maxlength: 4 },
    make: { type: String, required: true, maxlength: 100 },
    body: { type: String, required: true, maxlength: 100 },
    model: { type: String, required: true, maxlength: 100 },
    vin: { type: String, required: true, maxlength: 100 },
    value : {type: String, required: true, maxlength : 100},
});
module.exports = mongoose.model('Vehicle', VehicleSchema);
