// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";


// const useCart = () => {
// //    tan stack query
//     const axiosSecure = useAxiosSecure();
//     const {user} = useAuth();
//     const {refetch, data: cart = []} = useQuery({
//         queryKey:['cart' , user?.email],
//         queryFn: async () =>{
//             const res = await axiosSecure.get(`/carts?email=${user.email}`)
//             return res.data;
//         }
//     })
//     return [cart ,refetch]
// };

// export default useCart;


import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) return []; // Return an empty array if user email is not available
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Only run the query if user.email is available
    });

    return [cart, refetch];
};

export default useCart;
