import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;

const UpdateItem = () => {
  const item = useLoaderData();
  //   console.log(item);
  const { _id, name, image, category, recipe, price } = item || {};

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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount>0) {
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
    <div>
      <SectionTitle
        heading={"Update Item"}
        subheading={"Refresh information"}
      />

      <div className=" bg-base-200 p-4 rounded w-5/6 md:w-2/3 mx-auto">
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
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={recipe}
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
          <input
            className="btn bg-base-300 my-2 transition-all "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
