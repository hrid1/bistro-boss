import { Helmet } from "react-helmet-async";
import Cover from "../../components/common/cover";
import coverbg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={coverbg}
        title={"Our Menu"}
        subTilte={"Would you like to try a dish?"}
      ></Cover>
    </div>
  );
};

export default Menu;
