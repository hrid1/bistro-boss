import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/?email=${user.email}`);
      return res.data;
    },
  });

  return [data, refetch, error, isPending];
};

export default useCart;
