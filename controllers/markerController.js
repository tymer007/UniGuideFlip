import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import Marker from "../models/markerModel.js";

export const getMarkers = async (req, res) => {
  try {
    const markers = await Marker.find({});
    res.status(200).json({ success: true, data: markers });
  } catch (error) {
    console.error("Error in fetching markers:", error.message || error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createMarker = async (req, res) => {
  const marker = req.body;

  if (!marker.buildingName || !marker.geocode || !marker.buildingType) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMarker = new Marker(marker);
    await newMarker.save();
    res.status(201).json({ success: true, data: newMarker });
  } catch (error) {
    console.error("Error in creating new marker:", error.message || error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateMarker = async (req, res) => {
  const { id } = req.params;
  const marker = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid marker ID" });
  }

  try {
    // Destroy the old cover photo in Cloudinary if updating
    if (marker.coverPhoto) {
      await cloudinary.uploader.destroy(marker.coverPhoto.split("/").pop().split(".")[0]);
      
      // Upload new cover photo
      const uploadedResponse = await cloudinary.uploader.upload(marker.coverPhoto, {
        resource_type: 'auto',
    });
      marker.coverPhoto = uploadedResponse.secure_url;
    }
  } catch (error) {
    console.error("Error in handling cover photo update:", error.message || error);
    return res.status(500).json({ success: false, message: "Error updating cover photo" });
  }

  try {
    const updatedMarker = await Marker.findByIdAndUpdate(id, marker, { new: true });
    res.status(200).json({ success: true, data: updatedMarker });
  } catch (error) {
    console.error("Error in updating marker:", error.message || error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteMarker = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid marker ID" });
  }

  try {
    const marker = await Marker.findById(id);

    if (!marker) {
      return res.status(404).json({ success: false, message: "Marker not found" });
    }

    // Destroy cover photo in Cloudinary if it exists
    if (marker.coverPhoto) {
      await cloudinary.uploader.destroy(marker.coverPhoto.split("/").pop().split(".")[0]);
    }

    await Marker.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Marker deleted successfully" });
  } catch (error) {
    console.error("Error in deleting marker:", error.message || error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
