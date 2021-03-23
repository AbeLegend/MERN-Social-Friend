// lib
import React from "react";
// local
import post from "../JSON/post.json";
import user from "../JSON/user.json";
import Post from "../components/Post";
import FormPost from "../components/FormPost";

const Home = () => {
  return (
    <main className="mb-auto px-1 sm:px-3 md:px-6 py-6 flex flex-col justify-center mx-auto space-y-6">
      <FormPost user={user} />
      {post.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </main>
  );
};

export default Home;
