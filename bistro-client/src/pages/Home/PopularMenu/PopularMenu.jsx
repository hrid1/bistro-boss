import { useEffect, useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import MenuItem from "../../../components/common/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("../../../../public/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <SectionTitle heading={"Our Popular Menu"} subheading={"Check it out"} />
      <section className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </div>
  );
};

export default PopularMenu;
