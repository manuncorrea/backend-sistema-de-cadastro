import mongoose from 'mongoose';
/**
 * Models para criação dos clientes no banco de dodos
 */
const Scheme = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  address: {
    state: String,
    city: String,
    neighborhood: String,
    street: String, 
    number: String
  },

  phone:{
    type: String,
    required: true
  }

})

export default mongoose.model('User', Scheme);
