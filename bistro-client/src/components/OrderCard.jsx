const OrderCard = ({ item }) => {
  return (
    <div className="card  shadow-xl rounded-sm bg-[#F3F3F3]">
      <figure className="px-2 pt-2">
        <img src={item?.image} className="rounded w-11/12" />
      </figure>
      <p className=" absolute top-6 right-12 bg-gray-900 text-white px-4 py-2.5 rounded-sm">
        ${item?.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.name}</h2>
        <p className="text-gray-500">{item?.recipe}</p>
        <div className="card-actions">
          <button className="btn mt-2 bg-[#E8E8E8] text-[#BB8506] uppercase  border-b-4 border-b-[#BB8506] hover:bg-[#111827] hover:text-[#BB8506">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
