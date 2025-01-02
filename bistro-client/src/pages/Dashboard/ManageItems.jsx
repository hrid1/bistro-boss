import React from "react";
import SectionTitle from "../../components/common/SectionTitle";

const ManageItems = () => {
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up"
      ></SectionTitle>
      
      <div className="w-11/12 mx-auto h-10/12 bg-white p-6 md:p-12 rounded-md">
        <h3 className="text-3xl">Total Items: 6</h3>
      </div>
    </div>
  );
};

export default ManageItems;
