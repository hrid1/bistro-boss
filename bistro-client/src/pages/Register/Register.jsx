import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import signupImg from "../../assets/others/authentication.gif";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen ">
        {/* Login image */}
        <section className="w-full md:w-1/2 pl-12 md:ml-16">
          <img className="w-full h-full " src={signupImg} alt="img" />
        </section>

        {/* login Form */}
        <section className="w-full md:w-1/2 flex flex-col items-center justify-center md:mr-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border shadow-lg p-4 rounded-lg w-96 md:w-11/12 lg:w-2/3 bg-gray-100"
          >
            <h1 className="text-2xl md:text-3xl text-center font-bold">
              Sign Up
            </h1>
            <div className="mb-2">
              <label
                className="text-md font-medium  block mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                {...register("username")}
                type="username"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-2">
              <label
                className="text-md font-medium  block mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                {...register("email")}
                type="email"
                id="emial"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <label
                className="text-md font-medium  block mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                {...register("password")}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-2 text-center ">
              <p className="text-orange-500 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-500 font-medium">
                  Login
                </Link>
              </p>
              <p className="font-medium">Or sign in with</p>
              <div className="space-x-8 mt-2.5">
                <button>
                  <FaFacebook className="text-xl" />
                </button>
                <button>
                  <FaGoogle className="text-xl" />
                </button>
                <button>
                  <FaGithub className="text-xl" />
                </button>
              </div>
            </div>
            <button
              className="btn w-full bg-[#D1A054B3] text-white hover:text-gray-700 my-4"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
