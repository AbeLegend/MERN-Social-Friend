// lib
import React from "react";
import { EditOutlined } from "@ant-design/icons";
// local
import user from "../JSON/user.json";
import post from "../JSON/post.json";
import Post from "../components/Post";

const Setting = () => {
  return (
    <main className="mb-auto px-1 sm:px-3 md:px-6 py-6 flex flex-col mx-auto space-y-6 w-full md:max-w-3xl">
      <div className="flex flex-col items-center justify-center space-y-6">
        <img
          src={user.photo}
          alt={user.username}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center"
        />
        <div className="flex">
          <h1 className="font-semibold text-2xl">{user.username}</h1>
          <button className="ml-3 flex justify-center items-center text-xl">
            <EditOutlined className="hover:text-blue-600" />
          </button>
        </div>
        <p className="text-justify mx-6">{user.bio ? user.bio : null}</p>
      </div>
      <div className="flex justify-around rounded-lg md:rounded-xl">
        <div className="border-2 rounded-l-lg md:rounded-l-xl w-full text-center flex flex-col justify-center items-center py-1">
          <p>{user.friend.length}</p>
          <p>{user.friend.length > 1 ? "Friends" : "Friend"}</p>
        </div>
        <div className="border-2 w-full text-center flex flex-col justify-center items-center py-1">
          <p>{user.closeFriend.length}</p>
          <p>
            {user.closeFriend.length > 1 ? "Close Friends" : "Close Friend"}
          </p>
        </div>
        <div className="border-2 rounded-r-lg md:rounded-r-xl w-full text-center flex flex-col justify-center items-center py-1">
          <p>{user.group.length}</p>
          <p>{user.group.length > 1 ? "Groups" : "Group"}</p>
        </div>
      </div>
      {post.map((post) =>
        post.user._id === user._id ? <Post post={post} key={post._id} /> : null
      )}
    </main>
  );
};

export default Setting;
