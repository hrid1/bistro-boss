import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, subTilte }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 55 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="relative h-80 sm:h-[560px]  bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay and Conent */}
        <div className="absolute inset-0 bg-black bg-opacity-50 w-4/5 h-1/2 mx-auto top-1/2 transform -translate-y-1/2 mt-10">
          <div className="flex flex-col gap-2 items-center justify-center h-full font-cinzil">
            <h1 className="text-5xl md:text-7xl text-white font-bold uppercase">
              {title}
            </h1>
            <p className="text-lg text-white text-center uppercase">
              {subTilte}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
