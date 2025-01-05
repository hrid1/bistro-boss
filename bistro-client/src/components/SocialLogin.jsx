import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  //   console.log(googleSignIn);
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      if (result.user) {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          //   console.log(res.data);
          if (res.data.insertedId) {
            toast.success("User created successfully", {
              position: "top-right",
            });
            navigate("/");
          } else {
            toast.success("User Already Exists!", {
              position: "top-right",
            });
          }
        });
      }
    });
  };
  return (
    <div className="space-x-8 mt-2.5">
      <button type="button">
        <FaFacebook className="text-xl" />
      </button>
      <button type="button" onClick={handleGoogle}>
        <FaGoogle className="text-xl" />
      </button>
      <button type="button">
        <FaGithub className="text-xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
