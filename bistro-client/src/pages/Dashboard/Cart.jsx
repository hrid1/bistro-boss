import { use } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Spiner from "../../components/Spiner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, refetch, , isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = data?.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          //   console.log(res.data.deletedCount);

          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="Cart Items"
        subheading="Offer is Running"
      ></SectionTitle>

      {isLoading ? (
        <div className="w-11/12 mx-auto h bg-white p-4 md:p-8 rounded-md">
          <Spiner />
        </div>
      ) : (
        <div className="w-11/12 mx-auto h bg-white p-4 md:p-8 rounded-md">
          <div className="flex justify-between px-4 items-center">
            <h3 className="text-3xl">Total Items: {data?.length}</h3>
            <h3 className="text-3xl"> Price: {totalPrice}</h3>
            {data.length ? (
              <Link to="/dashboard/payment">
                <button className="btn btn-sm bg-orange-500 text-white">
                  Buy
                </button>
              </Link>
            ) : (
              <button disabled className="btn btn-sm bg-orange-500 text-white">
                Buy
              </button>
            )}
          </div>
          {/* table */}
          <div className="overflow-x-auto my-6 border rounded">
            <table className="table w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="py-2 px-4">ITEM IMAGE</th>
                  <th className="py-2 px-4">ITEM NAME</th>
                  <th className="py-2 px-4">PRICE</th>
                  {/* <th className="py-2 px-4">ACTION</th> */}
                  <th className="py-2 px-4">ACTION</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {data?.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4">
                      <div className="w-16 h-14 bg-gray-300 rounded">
                        <img src={item.image} alt="" />
                      </div>
                    </td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.price}</td>

                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="btn text-red-500 hover:text-red-600 hover:scale-105 border-none transition-all duration-200"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
