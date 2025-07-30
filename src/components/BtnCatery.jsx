import React from "react";

function BtnCatery({ item, hdlClickCategory }) {
  return (
    <button
      onClick={() => hdlClickCategory(item)}
      className="bg-amber-500 px-4 py-2 rounder-xl hover:bg-amber-400 cursor-pointer"
    >
      {item}
    </button>
  );
}

export default BtnCatery;
