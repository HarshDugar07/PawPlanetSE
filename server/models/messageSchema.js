import mongoose from 'mongoose';
import validator from 'validator';

// Define the schema for messages
const messageSchema = new mongoose.Schema({

  service: {
    type: String,
    required: [true, 'Message content is required'],
    enum:["Pet-sitter", "Pet-walker"]                         //add some more later
  },
  
  email: {
    type: String,
    required: [true, 'Email address is required'],
    validate: {
      validator: validator.isEmail, // Simplified validator reference
      message: props => `${props.value} is not a valid email address!`
    },
    lowercase: true
  },
  message: {
    type: String,
    required: [true, 'Message content is required'],
    minlength: [10, 'Message must be at least 10 characters long'],
    trim: true
  },
  appointmentDate: {
    type: Date,
    default: null  // Allows the user to optionally set this field
  },
  petDetails: {
    petName: {
      type: String,
      required: [true, 'Pet name is required'],
      minlength: [1, 'Pet name must be at least 1 character long'],
      trim: true
    },
    petType: {
      type: String,
      required: [true, 'Pet type is required']
    },
    petBreed: {
      type: String,
      required:false
    },
    petAge: {
      type: Number,
      required: [true, 'Pet age is required']
    },
    petMedicalHistory: {
      type: String,
      required: false  // Corrected the array use for a simple boolean
    },
    petSex:{
      type:String,
      required:[true,'Pet gender is required'],
      enum:['Male','Female']
    }
  },
  role:{
    type:String
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create a model from the schema
export const Message = mongoose.model("Message", messageSchema);



