const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-4 ">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-36"
        src={image}
        alt=""
      />
      <div>
        <p className="flex justify-between text-xl mb-2">
          {name} --------------{" "}
          <span className="text-yellow-600">${price}</span>
        </p>
        <p className="text-gray-500">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
