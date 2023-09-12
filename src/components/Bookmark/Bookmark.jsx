import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  console.log(bookmark);
  return (
    <div className="bg-gray-200 p-2">
      <h2 className=" text-xl text-center font-semibold tracking-tight ">
        {title}
      </h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
