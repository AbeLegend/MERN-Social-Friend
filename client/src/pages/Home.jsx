import React from "react";
import {
  DeleteOutlined,
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import post from "../JSON/post.json";

const Home = () => {
  return (
    <main className="mb-auto px-1 sm:px-3 md:px-6 py-6 flex flex-col justify-center mx-auto space-y-6">
      {post.map((post) => (
        <div
          key={post._id}
          className="flex flex-col rounded-md w-full lg:max-w-3xl shadow-xl p-3 md:p-4 lg:p-6 space-y-2 border-2 border-gray-200 border-opacity-25"
        >
          {/* user */}
          <div className="flex items-center justify-between">
            <img
              src={post.user.photo}
              alt="User Image"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center"
            />
            <h1 className="font-semibold ml-3 mr-auto">{post.user.username}</h1>
            <button className="flex justify-center items-center p-1 text-xl hover:bg-red-light rounded-md">
              <DeleteOutlined />
            </button>
          </div>
          {/* text */}
          <p className="text-justify">{post.text}</p>
          {/* tag */}
          <p>
            {post.tag
              ? post.tag.map((tag, index) => (
                  <span key={index} className="font-light text-blue-primary">
                    {`@${tag.username} `}
                  </span>
                ))
              : null}
          </p>
          {/* image */}
          {post.image !== null ? (
            <img src={post.image} alt="post_image" className="rounded-md" />
          ) : null}
          {/* hastag */}
          <p>
            {post.hastag
              ? post.hastag.map((hastag, index) => (
                  <span key={index}>{`#${hastag} `}</span>
                ))
              : null}
          </p>

          <div className="flex justify-between items-center">
            <button className="w-full border-2 border-gray-400 rounded-l-md flex items-center justify-center space-x-1 py-1 text-md sm:text-lg md:text-xl text-blue-secondary">
              <LikeOutlined />
              <span>{post.like.like.length}</span>{" "}
            </button>

            <button className="w-full border-2 border-gray-400 flex items-center justify-center space-x-1 py-1 text-md sm:text-lg md:text-xl">
              <DislikeOutlined />
              <span>{post.like.dislike.length}</span>{" "}
            </button>

            <button className="w-full border-2 border-gray-400 rounded-r-md flex items-center justify-center space-x-1 py-1 text-md sm:text-lg md:text-xl">
              <CommentOutlined /> <span>{post.comment.length}</span>
            </button>
          </div>
          {/* comment text */}
          <div className="px-2 md:px-3 border rounded-md border-gray-200 border-opacity-50 space-y-3 py-2">
            {post.comment.map((comment) => (
              <div key={comment._id}>
                <div className="flex space-x-2 items-center text-justify">
                  <img
                    src={comment.user.photo}
                    alt="comment image profile"
                    className="w-12 h-12 rounded-full object-cover object-center mb-auto"
                  />
                  <div className="flex flex-col  border-2 border-gray-200 p-1 rounded-xl shadow-sm">
                    <p className="font-semibold">{comment.user.username}</p>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </div>
            ))}
            <form className="flex p-1 md:p-2 space-x-0">
              <input
                type="text"
                placeholder="comment here"
                className="w-10/12 border-2 border-gray-200 rounded-l-md md:rounded-l-lg px-2"
              />
              <button
                type="submit"
                className="bg-blue-primary text-white mx-auto p-2 rounded-r-md md:rounded-r-lg md:w-2/12"
              >
                comment
              </button>
            </form>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Home;
