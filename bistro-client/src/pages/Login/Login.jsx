import { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const path = location?.state || "/";
  const handleValidate = () => {
    console.log(captchaRef.current?.value);
    const user_captcha = captchaRef.current?.value;
    if (validateCaptcha(user_captcha)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { loginUser } = useContext(AuthContext);
  console.log(loginUser);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password).then((res) => {
      if (res.user) {
        // console.log(res.user);
        navigate(path);
      }
    });
  };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
        {/* Login image */}
        <section className="w-full md:w-1/2 pl-12 md:ml-16">
          <img className="w-11/12" src={loginImg} alt="" />
        </section>

        {/* login Form */}
        <section className="w-full md:w-1/2 flex flex-col items-center justify-center  lg:mr-16">
          <form
            onSubmit={handleLogin}
            className="border shadow-lg p-4 rounded-lg w-full md:w-5/6 lg:w-2/3 bg-gray-100"
          >
            <h1 className="text-2xl md:text-3xl text-center font-bold">
              Login
            </h1>
            <div className="mb-2">
              <label
                className="text-md font-medium  block mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
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
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-2 space-y-1.5">
              {/* for captcha */}
              <LoadCanvasTemplate />
              <input
                className="border rounded px-4 py-2 w-full focus:outline-none"
                type="text"
                id="catcha"
                name="cpatcha"
                placeholder="Type the above characters here"
                ref={captchaRef}
              />
              <button
                onClick={handleValidate}
                type="button"
                className="w-full btn btn-sm bg-gray-400 text-white "
              >
                Validate
              </button>
            </div>

            <div className="mb-2 text-center ">
              <p className="text-orange-500 text-sm">
                Don&apos; have an account?{" "}
                <Link to="/register" className="text-orange-600 font-medium">
                  Register
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
              disabled={false}
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Login;
