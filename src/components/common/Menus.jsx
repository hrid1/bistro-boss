import MenuItem from "./MenuItem";

const Menus = ({ category }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
      {category?.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </section>
  );
};

export default Menus;
