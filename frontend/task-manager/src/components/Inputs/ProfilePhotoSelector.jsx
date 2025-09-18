import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";
import uploadImage from "../../utils/uploadImage";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (image) {
      // If image is a File object, show local preview
      if (image instanceof File) {
        const objectUrl = URL.createObjectURL(image);
        setPreviewUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
      } else {
        // If image is a URL (string), show it directly
        setPreviewUrl(image);
      }
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const { imageUrl } = await uploadImage(file); // Upload to backend
      setImage(imageUrl); // Store HTTPS URL in state
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!previewUrl ? (
        <div
          onClick={onChooseFile}
          className="w-20 h-20 flex items-center justify-center bg-blue-100/50 rounded-full relative cursor-pointer"
        >
          <LuUser className="text-4xl text-primary" />
          <LuUpload className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full w-6 h-6" />
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="profile"
            className={`w-20 h-20 rounded-full object-cover ${isUploading ? "opacity-50" : ""}`}
          />
          {!isUploading && (
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
              onClick={handleRemoveImage}
            >
              <LuTrash />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
