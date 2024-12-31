import { Helmet } from "react-helmet-async";
import Cover from "../../components/common/cover";
import coverbg from "../../assets/menu/banner3.jpg";
import desertbg from "../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import saladbg from "../../assets/menu/salad-bg.jpg";
import soupsbg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/common/SectionTitle";
import Menus from "../../components/common/Menus";
import OrderButton from "../../components/OrderButton";

const Menu = () => {
  const [menu] = useMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  console.log(deserts);

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
      <section className="mx-auto px-4 my-14">
        {/* Offer section */}
        <SectionTitle
          heading={"Todays Offers"}
          subheading={"Check it out"}
        ></SectionTitle>
        {/* <MenuItem></MenuItem> */}
        <Menus category={offered}></Menus>
      </section>

      {/* Desert section */}
      <section className="px-4 my-14">
        <Cover
          img={desertbg}
          title={"Desserts"}
          subTilte={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <SectionTitle
          heading={"Desserts"}
          subheading={"Check it out"}
        ></SectionTitle>

        <Menus category={deserts}></Menus>
        <OrderButton text={"Order Your Favorite Food"} />
      </section>
      {/* Desert section */}
      <section className="px-4 my-14">
        <Cover
          img={pizzabg}
          title={"Pizza"}
          subTilte={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <SectionTitle
          heading={"Pizza"}
          subheading={"Check it out"}
        ></SectionTitle>

        <Menus category={pizzas}></Menus>
        <OrderButton text="Order Your Favorite Food" />
      </section>
      {/* Soup section */}
      <section className="px-4 my-14">
        <Cover
          img={soupsbg}
          title={"Soups"}
          subTilte={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <SectionTitle
          heading={"Pizza"}
          subheading={"Check it out"}
        ></SectionTitle>

        <Menus category={soups}></Menus>
        <OrderButton text="Order Your Favorite Food" />
      </section>
      {/* Soup section */}
      <section className="px-4 my-14">
        <Cover
          img={saladbg}
          title={"salads"}
          subTilte={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <SectionTitle
          heading={"Salads"}
          subheading={"Check it out"}
        ></SectionTitle>

        <Menus category={salads}></Menus>
        <OrderButton text="Order Your Favorite Food" />
      </section>
    </div>
  );
};

export default Menu;
