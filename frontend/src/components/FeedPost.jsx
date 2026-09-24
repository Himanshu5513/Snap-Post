import React, { useEffect, useState } from "react";

const FeedPost = () => {
  const [data, setData] = useState([]);

  const api = async () => {
    const req = await fetch("http://localhost:3000/feed");
    const res = await req.json();

    console.log(res);
    setData(res.image);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 py-10 px-4">
      {/* Heading */}
      <div className="max-w-xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Feed</h1>
        <p className="text-gray-500 mt-1">Explore the latest posts ✨</p>
      </div>

      {/* Posts */}
      <div className="max-w-xl mx-auto space-y-7">
        {data.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md
            hover:shadow-xl transition duration-300"
          >
            {/* Post Header */}
            <div className="flex items-center justify-center gap-3 px-5 py-3">
              <p className="text-gray-800 text-2xl">{post.caption}</p>
            </div>

            {/* Image */}
            <div className="bg-gray-200">
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPost;
