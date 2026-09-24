import React from "react";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const nav = useNavigate();
  const formHandle = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(e.target);
    const req = await fetch("http://localhost:3000/createPost", {
      method: "POST",
      body: formData,
    });
    alert("Post Uploaded successfully");
    nav("/feed");
    e.target.reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={formHandle}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Post
        </h1>

        {/* File */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Image
          </label>

          <input
            type="file"
            accept="image/*"
            name="img"
            required
            className="w-full border border-gray-300 rounded-lg p-2 
            text-sm cursor-pointer
            file:bg-indigo-600 file:text-white
            file:border-0 file:rounded-md file:px-4 file:py-2
            file:mr-4 hover:file:bg-indigo-700"
          />
        </div>

        {/* Caption */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Caption
          </label>

          <textarea
            required
            name="caption"
            rows="4"
            placeholder="Write your caption..."
            className="w-full border border-gray-300 rounded-lg p-3
            outline-none resize-none
            focus:ring-2 focus:ring-indigo-500
            focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg
          font-semibold hover:bg-indigo-700
          active:scale-95 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
