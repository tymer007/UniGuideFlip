import mongoose from "mongoose";

const MarkerSchema = new mongoose.Schema({
  geocode: {
    type: [Number],  // Expecting an array of numbers (latitude, longitude)
    required: true
  },
  coverPhoto: {
    type: String,  // URL or path to the cover photo
    required: false
  },
  isLabelled: {
    type: Boolean,
    default: true
  },
  photos: {
    type: String,  // Could be URLs or paths to other photos
    required: false
  },
  buildingName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false
  },
  buildingType: {
    type: String,  // Type of the place (e.g., Restaurant)
    required: true
  },
  University: {
    type: String,
    default: 'University of Jos',
    required: true
  },
  rating: {
    type: String,  // Store ratings as strings (you could convert to Number)
    required: false
  },
  ratingCount: {
    type: String,  // Number of people who rated
    required: false
  },
  address: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  about: {
    type: [String],  // Array of strings (e.g., amenities or features)
    required: false
  },
  activeTime: {
    type: Map,  // Map to store days and times
    of: String,
    required: false
  },
  reviews: {
    type: String,
    required: false
  },
  priceRange: {
    type: String,
    required: false
  },
  room: {
    roomName: {
      type: String,
      required: false
    },
    direction: {
      type: String,
      required: false
    }
  },
  contributors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
},{
    timestamps: true
});
 
const Marker = mongoose.model('Marker', MarkerSchema);

export default Marker;
