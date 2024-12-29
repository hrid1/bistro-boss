import { useEffect, useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import MenuItem from "../../../components/common/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <SectionTitle heading={"Our Popular Menu"} subheading={"Check it out"} />
      <section className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </div>
  );
};

export default PopularMenu;
