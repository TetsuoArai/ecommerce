import PropTypes from "prop-types";

function Pagination({datos, postPerPage, setCurrentPosition, currentPosition}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(datos / postPerPage); i++) {
    pages.push(i);
  }

  function NextAndBack(isGoingBack) {
    isGoingBack ? setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition + 1);
  }

  
  return (
    <div className="flex justify-center items-center">
      <button onClick={() => NextAndBack(true)} className={currentPosition !== 1 ? "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-[30px] rounded-s-lg": "hidden"}>back</button>
      <div className="flex justify-center items-center">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPosition(page)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-[30px]">
            {page}
          </button>
        ))}
      <button onClick={() => NextAndBack(false)} className={currentPosition !== Math.ceil(datos / postPerPage) ? "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-[30px] rounded-e-lg" : "hidden"}>Next</button>
      </div>
    </div>
  );
}
Pagination.propTypes = {
  datos: PropTypes.number.isRequired,
  postPerPage: PropTypes.number.isRequired,
  setCurrentPosition: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
};

export default Pagination;
