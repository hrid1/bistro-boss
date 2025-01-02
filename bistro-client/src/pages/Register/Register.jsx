import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import signupImg from "../../assets/others/authentication.gif";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // reset();
    createUser(data.email, data.password)
      .then((res) => {
        if (res.user) {
          // console.log(res.user);
          updateUserProfile(data.username, data.photo)
            .then(() => {
              // console.log("Profile updated", res.user);
              navigate("/");
              toast.success("User created successfully", {
                position: "top-right",
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      })
      .catch((err) => {
        // console.log(err.message.split(":")[1]);
        toast.error(err.message.split(":")[1], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

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
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                {...register("photo", { required: true })}
                type="photo"
                id="photo"
                name="photo"
                placeholder="Enter your photo"
              />
              {errors.photo && (
                <span className="text-red-600">Photo Url is required</span>
              )}
            </div>
            <div className="mb-2">
              <label
                className="text-md font-medium  block mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                {...register("username", { required: true })}
                type="username"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              {errors.username && (
                <span className="text-red-600">Username is required</span>
              )}
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
                {...register("email", { required: true })}
                type="email"
                id="emial"
                name="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must have at most 20 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                    message:
                      "Password must contain at least uppercase, lowercase & a number",
                  },
                })}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
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
              Register
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
