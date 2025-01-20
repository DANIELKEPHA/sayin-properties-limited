import { updateCurrentUser } from "firebase/auth";
import { useSelector } from "react-redux";

export default function Profile() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center">Profile</h1>
      <form className="flex flex-col">
        <img
          src={updateCurrentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg mt-3"
          id="email"
        />

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg mt-3"
          id="password"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-70"
        >
          Update Profile
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
