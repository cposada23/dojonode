var mongoose = require('mongoose');
var {Schema} = mongoose;

var userSchema = new Schema({
  name:  String,
  phone: String
});
userSchema.set('toJSON', {
  getters: true,
  virtuals: true
});
mongoose.model('User', userSchema);