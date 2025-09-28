import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {

  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   
   const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('Login Successfully')
      navigate(from, {replace:true});
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
     <Helmet>
        <title>LuxeBeauty |  Login</title>
    </Helmet>
      <div className=" bg-base-200 min-h-screen p-10 ">
        <div className="lg:flex justify-center items-center lg:px-20 gap-10">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-4 text-lg font-semibold"> Welcome back! </p>
            <p className="">
          
         Sign in to continue your journey with our exclusive beauty collections.
            </p>
          </div>
          <div className="bg-white w-full lg:w-1/3 p-4 lg:px-10  rounded-lg  shadow-2xl border-2 border-gray-400">
             <SocialLogin></SocialLogin>
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                {/* <input
                onBlur={handleValidateCaptcha}
                  
                  type="text"
                  placeholder="type the captcha above"
                  name="captcha"
                  className="input input-bordered"
                  required
                /> */}
               
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn bg-teal-600 border-0 hover:bg-teal-700 uppercase text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-4 text-lg font-bold text-gray-600">
              <small>
                New Here?
                <Link to="/signup"> Create an account</Link>
              </small>
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
