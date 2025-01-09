import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Spiner from "../../components/Spiner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  // console.log(menu.length);
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call delete function here
        const res = await axiosSecure.delete(`menu/${item._id}`);
        // console.log("Item deleted:", res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", `${item.name} has been deleted.`, "success");
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up"
      ></SectionTitle>

      {loading ? (
        <div className="w-11/12 mx-auto h bg-white p-4 md:p-8 rounded-md">
          <Spiner />
        </div>
      ) : (
        <div className="w-11/12 mx-auto h bg-white p-4 md:p-8 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl">Total Items: {menu?.length}</h3>
            {/* <h3 className="text-3xl"> Price: {totalPrice}</h3> */}
          </div>
          {/* table */}
          <div className="overflow-x-auto my-6 border rounded">
            <table className="table w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">ITEM IMAGE</th>
                  <th className="py-2 px-4">ITEM NAME</th>
                  <th className="py-2 px-4">PRICE</th>
                  <th className="py-2 px-4">Update</th>
                  <th className="py-2 px-4">ACTION</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {menu?.map((item, idx) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    <td className="pl-4  pr-0 font-bold">{idx + 1}</td>
                    <td className="py-2 px-4">
                      <div className="w-16 h-14 bg-gray-300 rounded overflow-hidden">
                        <img src={item.image} className="" alt={item.name} />
                      </div>
                    </td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.price}</td>

                    <td className="py-2 px-4">
                      <button
                        // onClick={() => handleDelete(item?._id)}
                        className="btn text-green-500 hover:text-red-600 hover:scale-105 border-none transition-all duration-200"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDeleteItem(item)}
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

export default ManageItems;
