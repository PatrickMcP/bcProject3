const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    projects: [{
      type: Schema.Types.ObjectId,
      ref: "Project"
    }]
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);