import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleBlogRead }) => {
  // console.log(blog);
  const {
    cover,
    author_img,
    author,
    id,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full mb-4" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="w-16" src={author_img} alt="" />
          <div className="ml-2">
            <h3 className="font-bold text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl text-pink-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx}>
            <a> #{tag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleBlogRead(id, reading_time)}
        className=" text-purple-800 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleBlogRead: PropTypes.func,
};
export default Blog;
