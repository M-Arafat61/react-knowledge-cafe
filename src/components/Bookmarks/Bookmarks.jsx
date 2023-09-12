import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 pl-6">
      <h3 className="text-[#6047EC] text-2xl p-4 mb-5 font-semibold bg-gray-100 border border-blue-300 rounded-xl">
        Spent time on read: {readTime}
      </h3>
      <div className="bg-gray-100 p-10  space-y-3">
        <h2 className="font-bold text-2xl bg-gray-200 p-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};

export default Bookmarks;
