import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const OrderCard = ({ item }) => {
  const { _id, name, image, price } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const hanldeCart = (food) => {
    if (user && user?.email) {
      // console.log("Add to cart", food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      // send to the server
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} added to Cart`);
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Plz Login your Account ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#BB8506",
        cancelButtonColor: "#d33333",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location?.pathname });
        }
      });
    }
  };
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
          <button
            onClick={() => hanldeCart(item)}
            className="btn mt-2 bg-[#E8E8E8] text-[#BB8506] uppercase  border-b-4 border-b-[#BB8506] hover:bg-[#111827] hover:text-[#BB8506]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
