import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

/**
 * Uploads an image to the backend.
 * @param {File} imageFile - The image file selected from input.
 * @returns {Promise<Object>} - Returns response data containing image URL.
 */
const uploadImage = async (imageFile) => {
  if (!imageFile) throw new Error("No file provided");

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // e.g., { imageUrl: "https://..." }
  } catch (error) {
    console.error("Error uploading the image:", error);
    throw error;
  }
};

export default uploadImage;
