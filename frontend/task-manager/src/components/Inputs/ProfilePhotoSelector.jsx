import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";
import uploadImage from "../utils/uploadImage";

const ProfilePhotoSelector = ({ image, setImage, uploadedUrl, setUploadedUrl }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // cleanup
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);
    setError("");
    setLoading(true);

    try {
      const data = await uploadImage(file);
      setUploadedUrl(data.imageUrl);
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setUploadedUrl(null);
  };

  const onChooseFile = () => inputRef.current.click();

  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!previewUrl && !uploadedUrl ? (
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
            src={uploadedUrl || previewUrl}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}

      {loading && <p className="text-sm text-gray-600 mt-2">Uploading...</p>}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ProfilePhotoSelector;
