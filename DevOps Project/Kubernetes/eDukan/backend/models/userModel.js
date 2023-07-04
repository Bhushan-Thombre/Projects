import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Checks if the entered password and the password in the database are the same.
// This function can also be implemented in userController.js file
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware (also called pre and post hooks) are functions which are passed control
// during execution of asynchronous functions. Middleware is specified on the schema level and is useful for
// writing plugins.

// Password encryption. This can also be implemented in userController.js file
userSchema.pre('save', async function (next) {
  // Check if the password is modified or changed. If not move to the next middleware
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
