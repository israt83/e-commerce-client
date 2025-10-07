import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://e-commerce-server-five-chi.vercel.app/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {data:product = [] , isPending:loading , refetch} = useQuery({
    queryKey:['product'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/product');
      return res.data;
    }
  })


  return [product ,loading ,refetch];
};

export default useProduct;
