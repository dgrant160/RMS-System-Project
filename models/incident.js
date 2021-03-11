var mongoose = require('mongoose');
var faker = require('faker');


var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    irn: { type: String, required: true, maxlength: 100 },
    date: { type: Date, required: true, maxlength: 100 },
    location_info: { type: String, required: true, maxlength: 100 },
    location_name: { type: String, required: true, maxlength: 100 },
    narrative: { type: String, required: true, maxlength: 100 },
    officer: { type: String, required:true, maxlength: 5 },
    report_date: { type: String, required: true, maxlength: 100 },
    type: { type: String, required: true, maxlength: 100 },
    badge: { type: String, required: true, maxlength: 100 },
});

module.exports = mongoose.model('Incident', IncidentSchema);
