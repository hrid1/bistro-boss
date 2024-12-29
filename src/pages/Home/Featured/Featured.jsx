import SectionTitle from "../../../components/common/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-featured-bg  pt-12 pb-20 bg-fixed">
      <div className="w-full bg-blue-600 bg-cover"></div>
      <SectionTitle
        subheading={"Check It Out"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="flex flex-col md:flex-row  items-center justify-center gap-16 bg-black/10 py-8 px-16">
        <img className="md:w-1/2" src={featureImg} alt="feature img" />
        <div className="text-white space-y-2">
          <p className="text-2xl">MARCH 20, 2024</p>
          <h4 className="uppercase text-2xl">Where Can I Get Some</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2 text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
