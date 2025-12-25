import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">
      {/* Avatar & Name */}
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
        />

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-2 text-sm text-gray-600">
        <p>
          📞 <span className="ml-1">{user.phone}</span>
        </p>
        <p>
          ⭐ Rating: <span className="font-semibold">{user.rating}</span>
        </p>
        <p>
          🛒 Total Orders:{" "}
          <span className="font-semibold">{user.totalOrders}</span>
        </p>
        <p>
          📅 Joined:{" "}
          <span className="font-semibold">{user.joinedDate}</span>
        </p>
      </div>

    </div>
  );
};

export default UserCard;
