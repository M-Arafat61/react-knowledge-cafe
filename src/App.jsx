import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(newBookmarks);
  };

  const handleBlogRead = (id, time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
    // console.log(newReadTime);
    const remaining = bookmarks.filter(item => item.id !== id);
    setBookmarks(remaining);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-4">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleBlogRead={handleBlogRead}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
