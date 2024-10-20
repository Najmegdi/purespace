
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
import { FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const queryClient = useQueryClient();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    navigate('/');
    dispatch(logoutUser());
    dispatch(clearCart());
    queryClient.removeQueries();
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".profile-dropdown")) {
      setDropdownVisible(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return (
    <header className="py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="relative">
            <div
              className="flex gap-x-2 sm:gap-x-4 items-end cursor-pointer profile-dropdown"
              onClick={toggleDropdown}
            >
              <img
                src="/assets/prof.jpg"
                alt="Profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top border-2 border-gray-300 shadow-md"
              />
              <p className="text-base font-bold">
                <span className=" text-sm text-gray-400 font-medium">Hi, </span><br />{user.username}</p>
              <FaChevronDown
                className={`text-gray-600 transition-transform duration-200 ${dropdownVisible ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>
            {dropdownVisible && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 transform transition-transform duration-200 ease-in-out opacity-100">
                <ul className="py-2">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="text-gray-600" />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to='/login' className="link link-hover text-xl sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to='/register' className="link link-hover text-xl sm:text-sm">
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
