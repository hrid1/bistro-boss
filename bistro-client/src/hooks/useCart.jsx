import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });

  return [data, error, isPending];
};

export default useCart;
