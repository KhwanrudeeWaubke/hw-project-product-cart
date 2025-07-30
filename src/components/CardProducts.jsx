import React from "react";

function CardProducts({ item }) {
  return (
    <div className="p-4 rounded-xl border border-amber-200 cursor-pointer hover:border-emerald-400 hover:shadow-lg">
      <div className="h-30 flex justify-center my-10">
        <img
          className="h-full object-cover"
          src={item?.image}
          alt={item?.title}
        />
      </div>
      <div className="p-4 space-y-4">
        <h2 className="'text-xl font-bold">{item?.title}</h2>
        <p className="text-sm line-clamp-3">{item?.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-amber-500">{item?.price} THB</h3>
        <div className="flext gap-3 text-gray-300 text-sm">
          <h3>rating{item?.rating.rate}</h3>
          <h3>count{item?.rating.count}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
