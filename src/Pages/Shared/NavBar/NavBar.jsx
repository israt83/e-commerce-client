
import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdLogout } from "react-icons/md";

const NavBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 500 }); 
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleMouseEnter = () => setIsModalVisible(true);
  const handleMouseLeave = () => setIsModalVisible(false);

  // Search handler
  const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim()) {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  }
};


  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904]  text-base font-medium"
              : "text-base  w-fit font-medium hover:text-[#D99904] duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904] w-fit text-base font-medium"
              : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
          }
        >
          Our Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/perfume"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904] w-fit text-base font-medium"
              : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
          }
        >
          Order
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive
                ? "text-[#D99904] w-fit text-base font-medium"
                : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive
                ? "text-[#D99904] w-fit text-base font-medium"
                : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li className="hidden lg:block">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904] w-fit text-base font-medium"
              : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
          }
        >
          <div className="flex mt-2">
            <FaShoppingCart className="text-lg" />
            <sup className="text-lg">+0{cart.length}</sup>
          </div>
        </NavLink>
      </li>

      {user ? (
        <p className="hidden md:flex items-center relative ">
          <div
            className="avatar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || ""} alt="User Avatar" />
            </div>
          </div>

          {isModalVisible && (
            <div
              data-aos="fade-down"
              className="absolute top-12 right-0 bg-black text-white rounded-md shadow-lg p-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col">
                <p className="font-medium">{user.displayName}</p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost text-white"
                >
                  <div className="flex gap-1">
                    <MdLogout />
                    <span>Logout</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </p>
      ) : (
        <li>
          <NavLink
            to="/login"
            className="text-base font-medium hover:text-[#D99904] duration-300"
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 text-black p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
       <div className="flex items-center justify-center space-x-5">
         <Link to="/" className="text-3xl font-bold">
          <span className="text-[#D99904] text-4xl">Luxe</span>
          <span>Beauty</span>
        </Link>
        <li className="list-none lg:hidden mt-3">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904] w-fit text-base font-medium"
              : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
          }
        >
          <div className="flex mt-2">
            <FaShoppingCart className="text-lg" />
            <sup className="text-lg">+0{cart.length}</sup>
          </div>
        </NavLink>
      </li>
      <div className="lg:hidden">
          {user ? (
        <p className="flex md:hidden items-center relative">
          <div
            className="avatar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || ""} alt="User Avatar" />
            </div>
          </div>

          {isModalVisible && (
            <div
              data-aos="fade-down"
              className="absolute top-12 right-0 bg-black text-white rounded-md shadow-lg p-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col">
                <p className="font-medium">{user.displayName}</p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost text-white"
                >
                  <div className="flex gap-1">
                    <MdLogout />
                    <span>Logout</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </p>
      ) : (
        <p>
          <NavLink
            to="/login"
            className="text-base font-medium hover:text-[#D99904] duration-300"
          >
            Login
          </NavLink>
        </p>
      )}
      </div>
       </div>
      </div>

      {/*  Search Bar Center */}
      <div className="navbar-center hidden lg:flex">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered-2 border-[#D99904] focus:border-[#D99904] w-80 text-[#ffffff]  bg-transparent border-2 placeholder:text-[#ffffff] placeholder:text-base placeholder:font-medium"
          />
        </form>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default NavBar;
