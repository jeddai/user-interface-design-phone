var mongoose = require('mongoose');
var schema_url = 'mongodb://localhost:27017/uid';

if (!mongoose.connection.db) {
  mongoose.connect(schema_url, function(err) {
    if (err) console.log(JSON.stringify(err));
    else console.log('Connected: ' + schema_url);
  });
}
var Schema = mongoose.Schema;

var textSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  messages: {
    type: Object,
    required: true
  }
});
var Text = mongoose.model('Text', textSchema);

var contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Object,
    required: true
  }
});
var Contact = mongoose.model('Contact', contactSchema);

var settingsSchema = new Schema({
  setting: {
    type: String,
    required: true
  },
  value: {
    type: Object,
    required: true
  }
});
var Settings = mongoose.model('Settings', settingsSchema);

module.exports = {
  Text: Text,
  Contact: Contact,
  Settings: Settings
};
