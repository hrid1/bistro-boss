import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import OrderButton from "../OrderButton";

const Menus = ({ name, category }) => {
  console.log(name);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
        {category?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${name}`}>
        <OrderButton text="Order Your Favorite Food" />
      </Link>
    </section>
  );
};

export default Menus;
