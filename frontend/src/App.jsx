import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import FeedPost from "./components/FeedPost";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/feed" element={<FeedPost />} />
      </Routes>
    </div>
  );
};

export default App;
