import User from "../models/userModel.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Corrected this line
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Error in getting user", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    const allowedFields = [
      "name",
      "uniEmail",
      "phoneNumber",
      "profilePicture",
      "flyTo",
      "role",
      "major",
      "university",
      "universityLocation",
      "defaultLocation",
      "favourites",
      "userStatus"
    ];

    const updateData = {};

    for (const field of allowedFields) {
      if (req.body[field]) {
        updateData[field] = req.body[field];
      }
    }

    // Check if userStatus is "new student" or "returning student"
    if (updateData.userStatus === "new student" || updateData.userStatus === "returning student") {
      updateData.isStudent = true;
    } else if (updateData.userStatus) {
      updateData.isStudent = false; // Reset isStudent if a non-student status is selected
    }

    // Update the user profile
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updateData },
      { new: true }
    ).select("-password");

    res.json({ success: true, user });
  } catch (error) {
    console.error("Error updating profile", error);
    res.status(500).json({ message: "Server error" });
  }
};
