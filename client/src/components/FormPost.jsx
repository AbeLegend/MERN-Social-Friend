import React from "react";

const FormPost = ({ user }) => {
  return (
    <div className="flex flex-col p-3 md:p-4 lg:p-6 space-y-2">
      <div className="flex items-center">
        <img
          src={user.photo}
          alt={user.username}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center"
        />
        <h1 className="font-semibold ml-3 mr-auto">{user.username}</h1>
      </div>
      <form className="space-y-2">
        <textarea
          name="postText"
          placeholder="What's your mind.."
          className="w-full lg:max-w-3xl resize-none rounded-lg shadow p-2"
        ></textarea>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="@tag"
            className="max-w-md border-2 rounded-lg border-gray-400 border-opacity-5 shadow px-2 py-1"
          />
          <input
            type="text"
            placeholder="#hastag"
            className="max-w-md border-2 rounded-lg border-gray-400 border-opacity-5 shadow px-2 py-1"
          />
          <input type="file" className="w-11/12" />
          <button className="bg-blue-primary text-white font-semibold p-2 md:p-3 rounded-md hover:bg-blue-secondary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPost;
