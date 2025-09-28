import { Link } from "react-router-dom";
import logo from "./../../../assets/logo2.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./Footer.css";

import { Fade } from "react-awesome-reveal";
// import useAuth from "../../useHooks/useAuth";

export default function Footer() {
  // const{theme} = useAuth()
  return (
    <>
      <footer
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`px-4 divide-y light border-t rounded-t-lg border-[#8a8585]'} bg-[#232020] text-[#d4cccc]`}
      >
        <div className="container  flex flex-col justify-between py-16 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/4 ">
            <Fade
              direction="up"
              delay={200}
              cascade={false}
              triggerOnce={false}
            >
              <div
                rel="noopener noreferrer"
                className="flex justify-center lg:justify-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                  <img
                    data-aos="zoom-in-up"
                    data-aos-delay="500 "
                    data-aos-duration="1000"
                    src={logo}
                    alt=""
                    className=""
                  />
                </div>

                <span
                  data-aos="zoom-in-up"
                  data-aos-delay="500 "
                  data-aos-duration="1000"
                  className="font-extrabold  text-2xl text-teal-400  "
                >
                  <span className="text-3xl font-bold">Luxe</span>
                  <span className="  font-bold text-base-100 dark:text-white  ">
                    Beauty
                  </span>
                </span>
              </div>

              <p className="text-sm text-[#d4cccc] mt-2 max-w-screen-md text-center lg:text-start ">
                Your go-to online destination for beauty inspiration and
                cosmetic essentials, where quality products meet expert guidance
                for a flawless look every day.
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3 text-base-100 ">
              <Fade cascade={false} direction="up" triggerOnce={false}>
                <h3
                  data-aos="zoom-in-down"
                  data-aos-delay="1000 "
                  data-aos-duration="1000"
                  className="footer-titles tracking-wide uppercase font-bold text-base-100  dark:text-white "
                >
                  Explore
                </h3>
                <ul className="space-y-1">
                  <li
                    data-aos="zoom-in-up"
                    data-aos-delay="1200 "
                    data-aos-duration="1200"
                    className="text-[#d4cccc]"
                  >
                    Features
                  </li>

                  <li
                    data-aos="zoom-in-up"
                    data-aos-delay="1400 "
                    data-aos-duration="1400"
                    className="text-[#d4cccc]"
                  >
                    FAQ
                  </li>
                </ul>
              </Fade>
            </div>
            <Fade cascade={false} direction="up" triggerOnce={false}>
              <div className="space-y-3">
                <h3
                  data-aos="zoom-in-down"
                  data-aos-delay="1000 "
                  data-aos-duration="1000"
                  className="footer-titles tracking-wide uppercase font-bold text-base-100 dark:text-white "
                >
                  Route
                </h3>
                <ul className="space-y-1">
                  <Fade
                    cascade={false}
                    direction="up"
                    triggerOnce={false}
                    delay={200}
                  >
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1200 "
                      data-aos-duration="1200"
                      className="hover:text-teal-500 duration-300"
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1400 "
                      data-aos-duration="1400"
                      className="hover:text-teal-500 duration-300"
                    >
                      <Link to="/register">Register</Link>
                    </li>
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1600 "
                      data-aos-duration="1600"
                      className="hover:text-teal-500 duration-300"
                    >
                      <Link to="/login">Login</Link>
                    </li>
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1800 "
                      data-aos-duration="1800"
                      className="hover:text-teal-500 duration-300"
                    >
                      <Link to="/assignments">Order</Link>
                    </li>
                  </Fade>
                </ul>
              </div>
            </Fade>
            <Fade
              cascade={false}
              delay={200}
              triggerOnce={false}
              direction="up"
            >
              <div className="space-y-3 ">
                <h3
                  data-aos="zoom-in-down"
                  data-aos-delay="1000 "
                  data-aos-duration="1000"
                  className="footer-titles uppercase font-bold text-base-100 dark:text-white  "
                >
                  Contact us
                </h3>
                <ul className="space-y-1">
                  <Fade
                    cascade={false}
                    delay={200}
                    triggerOnce={false}
                    direction="up"
                  >
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1200 "
                      data-aos-duration="1200"
                      className="flex items-center"
                    >
                      <FaLocationDot className="text-teal-400" />
                      <a rel="noopener noreferrer" className="ml-2" href="#">
                        Dhaka, 9999 City
                      </a>
                    </li>
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1400 "
                      data-aos-duration="1400"
                      className="flex items-center"
                    >
                      <FaPhoneAlt className="text-teal-400" />
                      <a rel="noopener noreferrer" className="ml-2" href="#">
                        13-543-135
                      </a>
                    </li>
                    <li
                      data-aos="zoom-in-up"
                      data-aos-delay="1600 "
                      data-aos-duration="1600"
                      className="flex items-center"
                    >
                      <IoMdMail className="text-teal-400" />
                      <a rel="noopener noreferrer" className="ml-2" href="#">
                        contact@taskbud.com
                      </a>
                    </li>
                    <div className="relative w-full max-w-xs mb-4 mt-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered text-black w-full pr-12"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-base-300 hover:bg-base-300 text-gray-700 p-2 px-3 rounded">
                        <FaPaperPlane />
                      </button>
                    </div>
                  </Fade>
                </ul>
              </div>
            </Fade>
            <Fade
              cascade={false}
              delay={200}
              triggerOnce={false}
              direction="up"
            >
              <div className="space-y-3">
                <div
                  data-aos="zoom-in-down"
                  data-aos-delay="1000 "
                  data-aos-duration="1000"
                  className="footer-titles uppercase font-bold text-base-100 dark:text-white  "
                >
                  Social media
                </div>

                <div className="flex flex-col space-y-4 mx-10">
                  <Fade
                    cascade={true}
                    triggerOnce={false}
                    delay={200}
                    direction="up"
                  >
                   <div className="flex justify-start space-x-4">
                     {/* Facebook */}
                    <a
                      href="#"
                      title="Facebook"
                      className="flex items-center text-white bg-blue-700 hover:scale-110 duration-300 px-2 py-1 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-5 h-5"
                      >
                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      title="Instagram"
                      className="flex items-center text-white bg-pink-500 hover:scale-110 duration-300 px-2 py-1 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                      </svg>
                    </a>

                    {/* Twitter (X) */}
                    <a
                      href="#"
                      title="Twitter"
                      className="flex items-center text-white bg-black hover:scale-110 duration-300 px-2 py-1 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                      </svg>
                    </a>
                   </div>
                  <div className="flex justify-start space-x-4">
                    
                    {/* Pinterest */}
                    <a
                      href="#"
                      title="Pinterest"
                      className="flex items-center text-white bg-red-600 hover:scale-110 duration-300 px-2 py-1 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12 0 4.991 3.062 9.263 7.385 11.046-.102-.939-.195-2.379.041-3.405.213-.91 1.367-5.797 1.367-5.797s-.348-.696-.348-1.725c0-1.616.937-2.825 2.102-2.825.992 0 1.471.744 1.471 1.635 0 .997-.635 2.49-.962 3.873-.274 1.159.58 2.106 1.721 2.106 2.065 0 3.656-2.179 3.656-5.327 0-2.786-2.004-4.737-4.865-4.737-3.316 0-5.265 2.482-5.265 5.048 0 1 .383 2.072.86 2.654.094.115.107.215.079.331-.086.364-.282 1.157-.32 1.317-.05.213-.162.259-.375.157-1.397-.651-2.27-2.692-2.27-4.339 0-3.532 2.568-6.777 7.401-6.777 3.884 0 6.9 2.768 6.9 6.469 0 3.86-2.437 6.965-5.814 6.965-1.136 0-2.204-.59-2.569-1.288l-.698 2.662c-.252.966-.937 2.176-1.397 2.916C10.81 23.89 11.392 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      title="LinkedIn"
                      className="flex items-center text-white bg-blue-600 hover:scale-110 duration-300 px-2 py-1 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.366-1.852 3.594 0 4.257 2.364 4.257 5.438v6.305zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07 0-1.143.925-2.069 2.069-2.069 1.144 0 2.07.926 2.07 2.069 0 1.144-.926 2.07-2.07 2.07zM7.119 20.452H3.554V9h3.565v11.452z"></path>
                      </svg>
                    </a>
                  </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="py-10 text-sm text-center text-[#dcd0d0]">
          © 2024 Company Co. All rights reserved.
        </div>
      </footer>
    </>
  );
}
