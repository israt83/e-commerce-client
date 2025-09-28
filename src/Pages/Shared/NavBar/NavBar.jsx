// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
// const [isAdmin] = useAdmin();

//   const [cart] = useCart();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };
//   const navLink = (
//     <>
//       <li>
//         <Link to="/" className={({ isActive }) =>
//           isActive
//             ? ` text-teal-400 w-fit  text-sm font-medium  `
//             : `text-sm w-fit  font-medium  hover:text-teal-400 duration-300  `
//         }>Home</Link>
//       </li>
//       <li>
//         <Link to="/product">Our Product</Link>
//       </li>

//       <li>
//         <Link to="/order/perfume">Order</Link>
//       </li>
//       {
//         user && isAdmin && <li>
//         <Link to="/dashboard/adminHome">Dashboard</Link>
//       </li>
//       }
//       {
//         user && !isAdmin && <li>
//         <Link to="/dashboard/userHome">Dashboard</Link>
//       </li>
//       }
//       <li>
//         <Link to="/dashboard/cart">
//           <button className="btn">
//           <FaShoppingCart></FaShoppingCart>
//             <div className="badge">+0{cart.length}</div>
//           </button>
//         </Link>
//       </li>

//       {user ? (
//         <>
//           {" "}
//           <button onClick={handleLogOut} className="btn btn-ghost">
//             LogOut
//           </button>{" "}
//         </>
//       ) : (
//         <>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {navLink}
//           </ul>
//         </div>
//         <a className=" text-3xl font-bold"><span className="text-[#D99904] text-4xl">Luxe</span><span>Beauty</span></a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLink}</ul>
//       </div>
//       <div className="navbar-end">
//         <a className="btn">Button</a>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

// import { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [cart] = useCart();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const handleMouseEnter = () => setIsModalVisible(true);
//   const handleMouseLeave = () => setIsModalVisible(false);

//   const navLink = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-[#D99904] w-fit text-base font-medium"
//               : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/product"
//           className={({ isActive }) =>
//             isActive
//               ? "text-[#D99904] w-fit text-base font-medium"
//               : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//           }
//         >
//           Our Product
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/order/perfume"
//           className={({ isActive }) =>
//             isActive
//               ? "text-[#D99904] w-fit text-base font-medium"
//               : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//           }
//         >
//           Order
//         </NavLink>
//       </li>
//       {user && isAdmin && (
//         <li>
//           <NavLink
//             to="/dashboard/adminHome"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-[#D99904] w-fit text-base font-medium"
//                 : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//             }
//           >
//             Dashboard
//           </NavLink>
//         </li>
//       )}
//       {user && !isAdmin && (
//         <li>
//           <NavLink
//             to="/dashboard/userHome"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-[#D99904] w-fit text-base font-medium"
//                 : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//             }
//           >
//             Dashboard
//           </NavLink>
//         </li>
//       )}
//       <li>
//         <NavLink
//           to="/dashboard/cart"
//           className={({ isActive }) =>
//             isActive
//               ? "text-[#D99904] w-fit text-base font-medium"
//               : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//           }
//         >
//           <div className="flex mt-2">
//             <FaShoppingCart className="text-lg" />
//             <sup className="text-lg">+0{cart.length}</sup>
//           </div>
//         </NavLink>
//       </li>
//       {user ? (
//          <li className="flex items-center relative">
//          <div
//            className="avatar"
//            onMouseEnter={handleMouseEnter}
//            onMouseLeave={handleMouseLeave}
//          >
//            <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
//              <img src={user?.photoURL || ''} alt="User Avatar" />
//            </div>
//          </div>

//          {/* Modal for display name and logout button */}
//           {isModalVisible && (
//             <div
//               data-aos="fade-down"
//               className="absolute top-12 right-0 bg-black text-white rounded-md shadow-lg p-4"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="grid grid-rows-2">
//                 <p className="font-medium">{user.displayName}</p>
//                 <button
//                   onClick={handleLogOut}
//                   className="btn btn-ghost text-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//          {/* {isModalVisible && (
//            <div
          
//              className="absolute top-12 right-0 bg-black text-white rounded-md shadow-lg p-4"
//              onMouseEnter={handleMouseEnter}
//              onMouseLeave={handleMouseLeave}
//            >
//              <div className="grid grid-rows-2">
//              <p className="font-medium">{user.displayName}</p>
//              <button
//                onClick={handleLogOut}
//                className=" btn btn-ghost text-red-500"
//              >
//                Logout
//              </button>
//              </div>
//            </div>
//          )} */}
//        </li>


//       ) : (
//         <li>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-[#D99904] w-fit text-base font-medium"
//                 : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
//             }
//           >
//             Login
//           </NavLink>
//         </li>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {navLink}
//           </ul>
//         </div>
//         <a className="text-3xl font-bold">
//           <span className="text-[#D99904] text-4xl">Luxe</span>
//           <span>Beauty</span>
//         </a>
//       </div>
//       <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLink}</ul>
//       </div>
//     </div>
//   );
// };

// export default NavBar;





import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with a fade duration
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleMouseEnter = () => setIsModalVisible(true);
  const handleMouseLeave = () => setIsModalVisible(false);

  const navLink = (
    <>
     <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#D99904] w-fit text-base font-medium"
              : "text-base w-fit font-medium hover:text-[#D99904] duration-300"
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
      <li>
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
        <li className="flex items-center relative">
          <div className="avatar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="w-10 rounded-full ring-1 ring-[#4b5664] ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || ''} alt="User Avatar" />
            </div>
          </div>

          {/* Modal for display name and logout button with fade-down animation */}
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
                 <MdLogout /><span>Logout</span>
                 </div>
                </button>
              </div>
            </div>
          )}
        </li>
      ) : (
        <li>
          <NavLink to="/login" className="text-base font-medium hover:text-[#D99904] duration-300">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLink}
          </ul>
        </div>
        <a className="text-3xl font-bold">
          <span className="text-[#D99904] text-4xl">Luxe</span>
          <span>Beauty</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default NavBar;
