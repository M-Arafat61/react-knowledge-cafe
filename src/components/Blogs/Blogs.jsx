import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleBlogRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 bg-white space-y-8">
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleBlogRead={handleBlogRead}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleBlogRead: PropTypes.func,
};
export default Blogs;
