import React from "react";

const AvatarGroup = ({ avatars = [], maxVisible = 3 }) => {
  return (
    <div className="flex items-center">
      {avatars
        .filter(Boolean) 
        .slice(0, maxVisible)
        .map((avatar, index) => {
          const isImage = avatar?.startsWith("http");
          return isImage ? (
            <img
              key={index}
              src={avatar}
              alt={`User avatar ${index + 1}`}
              className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0 object-cover"
            />
          ) : (
            <div
              key={index}
              title={avatar} 
              className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-600 text-sm font-medium rounded-full border-2 border-white -ml-3 first:ml-0"
            >
              {avatar?.charAt(0).toUpperCase() || "?"}
            </div>
          );
        })}

      {avatars.length > maxVisible && (
        <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-gray-600 text-sm font-medium rounded-full border-2 border-white -ml-3">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
