import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 p-2">
      <h3 className="">Spent time on read:{readTime}</h3>
      <h2>Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};

export default Bookmarks;
