import { RotatingLines } from "react-loader-spinner";

const Spiner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="orange"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
);
};

export default Spiner;
