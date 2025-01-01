import { useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

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

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
        {/* Login image */}
        <section className="w-full md:w-1/2 pl-12 md:ml-16">
          <img className="w-11/12" src={loginImg} alt="" />
        </section>

        {/* login Form */}
        <section className="w-full md:w-1/2 flex flex-col items-center justify-center md:mr-16">
          <form
            onSubmit={handleLogin}
            className="border shadow-lg p-4 rounded-lg w-80 sm:w-96 bg-gray-100"
          >
            <h1 className="text-2x md:text-3xl text-center font-bold">Login</h1>
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
                className="w-full btn btn-sm bg-gray-400 text-white "
              >
                Validate
              </button>
            </div>

            <button
              className="btn w-full bg-[#D1A054B3] text-white hover:text-gray-700 my-4"
              type="submit"
              disabled={disable}
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Login;
