import React from "react";
import { HiSearch } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
const pin = {
  right: 0,
  top: 0,
};
function Searchbar() {
  return (
    <div className="relative mr-6 my-2 inline-block">
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-3"
        placeholder="Search by name..."
      />
      <div
        style={pin}
        className="absolute pin-r pin-t mt-3 mr-7 text-purple-lighter w-2"
      >
        <IconContext.Provider value={{ size: "1.4em", color: "grey" }}>
          <HiSearch />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Searchbar;
