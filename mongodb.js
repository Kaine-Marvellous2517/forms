const { default: mongoose } = require('mongoose');
const nongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CapstoneProject')
.then(()=>{
  console.log('mongodb connected');
})
.catch(()=>{
  console.log('failed to commect to a database')
})

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const collection = new mongoose.model('Collection1', SignUpSchema);

module.exports = collection;