import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    uniEmail: {
      type: String,
      unique: true,
      sparse: true, // Prevents uniqueness issues for null/undefined
    },   
    profilePicture: {
      type: String, // URL or path to photo
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    flyTo: {
      type: Boolean,
      default: true,
    },
    role: {
      type: [String],
      enum: ["user", "staff", "admin"], // Ensured "user" is removed from default
      default: ["user"], // Or add "user" to the enum
    },
    major: {
      faculty: {
        type: String,
      },
      department: {
        type: String,
      },
    },
    referralSource: {
      type: String,
    },
    userStatus: {
      type: String,
      enum: ["new student", "returning student", "visitor", "rather not say"],
    },
    isStudent: {
      type: Boolean,
    },
    university: {
      type: String,
      default: "University of Jos",
      required: false,
    },
    universityLocation: {
      name: {
        type: String,
        required: false,
        default: "University of Jos",
      },
      geolocation: {
        type: [Number], // Latitude and Longitude
        required: false,
        default: [9.96237050476886, 8.877620586182893],
      },
      zoomLevel: {
        type: Number,
        required: false,
        default: 15,
      },
    },
    defaultLocation: {
      name: {
        type: String,
      },
      geolocation: {
        type: [Number], // Latitude and Longitude
      },
      zoomLevel: {
        type: Number,
      },
    },
    contributor: {
      type: Boolean,
      default: false,
    },
    contributions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Marker",
      },
    ],
    favourites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Marker",
      },
    ],
    termsAccepted: {
      type: Boolean,
      required: true,
    },
    termsAcceptedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    privacyPolicyAccepted: {
      type: Boolean,
      required: true,
    },
    privacyPolicyAcceptedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    resetPassword: String,
    resetPasswordExpiresAt: Date,
    verificationCode: String,
    verificationCodeExpiresAt: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
