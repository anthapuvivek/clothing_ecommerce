export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />

          <h1 className="text-2xl font-bold mt-4">
            {user?.email || "Guest User"}
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to your profile 👋
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{user?.email}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Account Status</p>
            <p className="font-semibold text-green-600">Active ✅</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-semibold">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
