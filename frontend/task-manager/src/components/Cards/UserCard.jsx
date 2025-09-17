import React from "react";

const UserCard = ({ userInfo }) => {
  const getInitials = (name = "User") => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "U";
    return (
      (parts[0][0] || "") + (parts[parts.length - 1][0] || "")
    ).toUpperCase();
  };

  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    userInfo?.name || "User"
  )}&background=random`;

  return (
    <div className="user-card p-4 border rounded-xl shadow-sm bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={userInfo?.profileImageUrl || fallbackImage}
            alt={`${userInfo?.name || "User"}'s Avatar`}
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/48/eee/333?text=${getInitials(
                userInfo?.name
              )}`;
            }}
          />

          <div>
            <p className="text-sm font-medium text-gray-800">
              {userInfo?.name || "Unknown User"}
            </p>
            <p className="text-xs text-gray-500">{userInfo?.email || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-3 mt-5">
        <StatCard
          label="Pending"
          count={userInfo?.pendingTasks || 0}
          status="Pending"
        />
        <StatCard
          label="In Progress"
          count={userInfo?.inProgressTasks || 0}
          status="In Progress"
        />
        <StatCard
          label="Completed"
          count={userInfo?.completedTasks || 0}
          status="Completed"
        />
      </div>
    </div>
  );
};

export default UserCard;

const StatCard = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-600 bg-cyan-50";
      case "Completed":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-amber-600 bg-amber-50";
      default:
        return "text-violet-600 bg-violet-50";
    }
  };

  return (
    <div
      className={`flex-1 text-center text-[11px] font-medium ${getStatusTagColor()} px-4 py-2 rounded-lg shadow-sm`}
    >
      <span className="text-[14px] font-bold block">{count}</span>
      <span className="text-[11px]">{label}</span>
    </div>
  );
};
