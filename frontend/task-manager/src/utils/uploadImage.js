import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  if (!imageFile) throw new Error("No file provided");

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Ensure returned URL uses deployed backend
    let imageUrl = response.data.imageUrl;
    if (imageUrl.startsWith("http://localhost")) {
      imageUrl = imageUrl.replace("http://localhost:8000", import.meta.env.VITE_BACKEND_URL);
    }

    return { imageUrl };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
