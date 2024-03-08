import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    specialization: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      default: '',
    },
    qualification: {
      type: String,
    },
    experience: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);



  doctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // Encrypt password using bcrypt
  doctorSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;