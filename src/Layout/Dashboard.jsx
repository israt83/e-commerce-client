import { FaAd, FaBook, FaEnvelope, FaHome, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
  
    const [isAdmin] = useAdmin();

  return (
    <div className="container mx-auto">
        <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="product p-4 space-y-4">
       {
        isAdmin ? <>
           <li className="flex space-x-2">
          <FaHome className="mt-1"></FaHome>
            <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaUtensils className="mt-1"></FaUtensils>
            <NavLink to="/dashboard/addItems">Add Items</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaList className="mt-1"></FaList>
            <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaBook className="mt-1"></FaBook>
            <NavLink to="/dashboard/bookings">Manage Bookings</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaUser className="mt-1"></FaUser>
            <NavLink to="/dashboard/users">All Users</NavLink>
          </li>
        </>
        :
        <>
           <li className="flex space-x-2">
          <FaHome className="mt-1"></FaHome>
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaCalendar className="mt-1"></FaCalendar>
            <NavLink to="/dashboard/">Reservation</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaShoppingCart className="mt-1"></FaShoppingCart>
            <NavLink to="/dashboard/cart">My Cart ({cart.length})</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaAd className="mt-1"></FaAd>
            <NavLink to="/dashboard/review">Add a Review</NavLink>
          </li>
          <li className="flex space-x-2">
          <FaList className="mt-1"></FaList>
            <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
          </li>
        </>
       }
          {/* shared navlinks */}
          <div className="divider">  </div>
          <li className="flex space-x-2">
          <FaHome className="mt-1"></FaHome>
            <NavLink to="/"> Home</NavLink>
          </li>
        
          <li className="flex space-x-2">
          <FaEnvelope className="mt-1"></FaEnvelope>
            <NavLink to="/dashboard/contact"> Contact</NavLink>
          </li>
        
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
