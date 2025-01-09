import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/common/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;

const AddItems = () => {
  // handle img hosting

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imgFile = { image: data.photo[0] };

    const response = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
      imgFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    //    create item and send to the server
    if (response.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: response.data.data.url,
      };
      //   console.log(menuItem);
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Menu item added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <SectionTitle heading={"ADD AN ITEM"} subheading={"What's new ?"} />

      <div className=" bg-base-200 p-4 rounded w-2/3">
        <div>
          <h2 className="text-xl font-bold text-center my-2">Add Items Form</h2>
        </div>
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className="" htmlFor="name">
              Recipe Name
            </label>
            <input
              {...register("name")}
              className="w-full p-1 rounded-md"
              placeholder="Recipe name"
            />
          </div>
          <div className="flex flex-col md:flex-row  gap-2 items-center justify-between mb-2">
            <div className="w-full md:w-1/2">
              <label className="block mb-1" htmlFor="category">
                Category*
              </label>
              <select
                {...register("category")}
                className="w-full p-1 rounded-md"
                defaultValue={"null"}
              >
                <option disabled value={"null"}>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 bg-blue-">
              <label className="mb-2 w-full block" htmlFor="price">
                Price*
              </label>
              <input
                className="p-1 rounded-md w-full"
                {...register("price")}
                placeholder="Recipe price"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 w-full block" htmlFor="price">
              Recipe Details*
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full h-24 md:h-32 "
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div>
            <input
              //   {...register("file")}
              type="file"
              className="file-input w-full md:w-1/2"
              {...register("photo")}
            />
          </div>
          <input className="btn bg-base-300 my-2 " type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
