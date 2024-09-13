import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  city: String,
  contact_number: String
});
const Data = mongoose.models.Data ||  mongoose.model('Data' , dataSchema);

export default Data;