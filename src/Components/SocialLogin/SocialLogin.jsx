import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="p-6 border-b border-gray-700 mb-5">
      <div className=""></div>
      <div>
        {/* <button onClick={handleGoogleSignIn} className="btn btn-success btn-outline ">
                    <FaGoogle></FaGoogle>
                    Google
                </button> */}

        <button
        onClick={handleGoogleSignIn}
          href="#"
          class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg- text-black shadow hover:bg-gray-100/90  px-4 py-3 border border-gray-400 w-full whitespace-pre md:flex group relative  justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
        >
          <span class="absolute  translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
          <div class="flex items-center">
            <span class="ml-1 text-gray-700 text-base">Login with Google</span>
          </div>
          <div class="">
            <FcGoogle className="text-2xl"></FcGoogle>
           
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
