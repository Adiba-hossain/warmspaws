import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const {
    user,
    updateUser,
    loading: authLoading,
    setUser,
  } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  if (authLoading) return <Loading />;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser({ displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-10 px-4">
      <Toaster position="top-center" />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          My Profile
        </h2>

        {/* User Info */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/0Jmshvb/default-avatar.png"
            }
            alt={user?.displayName}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <p className="text-lg font-semibold">
            {user?.displayName || "No Name"}
          </p>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transition transform"
          >
            Update Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transition transform"
              >
                {loading ? "Updating..." : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
