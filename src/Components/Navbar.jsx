import { Fragment, useContext, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import avatar from '../Assets/user.png'
import logo2 from '../Assets/Logo/Photoberry.png'
import logo3 from '../Assets/Logo/Photoberry White.png'
import { NavLink, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../ConetextProvider/ContextProvider";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
 



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate()
  const {user , logOut} = useContext(AuthContext)
useEffect(() => {
  Aos.init();
}, []);

  const navigation = (
    <>
      <div className="space-x-2">
        <NavLink
          
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? `btn bg-yellow-50 duration-500 ${
                  pathname === "/contact"
                    ? "text-black"
                    : "text-white bg-opacity-30"
                } border-none hover:text-black btn-sm capitalize`
              : isPending
              ? `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
              : `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
          }
        >
          Home
        </NavLink>
        <NavLink
          
          to="/services"
          className={({ isActive, isPending }) =>
            isActive
              ? `btn bg-yellow-50 duration-500 ${
                  pathname === "/contact"
                    ? "text-black"
                    : "text-white bg-opacity-30"
                } border-none hover:text-black btn-sm capitalize`
              : isPending
              ? `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
              : `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
          }
        >
          Services
        </NavLink>
        <NavLink
         
          to="/gallery"
          className={({ isActive, isPending }) =>
            isActive
              ? `btn bg-yellow-50 duration-500 ${
                  pathname === "/contact"
                    ? "text-black"
                    : "text-white bg-opacity-30"
                } border-none hover:text-black btn-sm capitalize`
              : isPending
              ? `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
              : `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } btn-sm capitalize`
          }
        >
          Gallery
        </NavLink>
        <NavLink
        
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? `btn bg-yellow-50 duration-500 ${
                  pathname === "/contact"
                    ? "text-black"
                    : "text-white bg-opacity-30"
                } border-none hover:text-black btn-sm capitalize`
              : isPending
              ? `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } duration-500 btn-sm capitalize`
              : `btn btn-ghost ${
                  pathname === "/contact" ? "text-black" : "text-white"
                } btn-sm capitalize`
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );


const signOut = () => {
  logOut()
  toast.success(`Logged Out`, {
  position: "bottom-center"
})
navigate('/')

}



const {pathname} = useLocation()



  return (
    <div data-aos="fade-down" className="relative z-50">
      <Disclosure as="nav" className={`absolute z-20 w-full`}>
        {({ open }) => (
          <>
            <div className="mx-auto container px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div
                    onClick={() => navigate("/")}
                    className="flex hover:cursor-pointer flex-shrink-0 items-center"
                  >
                    <img
                      className="h-12 duration-500 w-auto"
                      src={`${pathname === "/register" ? logo3 : logo2}`}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="pt-2">{navigation}</div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {user && (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <div>
                          <Menu.Button className="relative duration-300 hover:p-1 max-w-16 max-h-16 flex rounded-full bg-gray-800 text-sm border-2 border-white">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-10 object-cover  w-10 rounded-full"
                              src={user?.photoURL ? user.photoURL : avatar}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                                  )}
                                >
                                  {user.displayName}
                                </a>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={signOut}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </div>
                    </Menu>
                  )}
                  {!user ? (
                    <div className={`${pathname === "/login" && "hidden"}`}>
                      <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "btn bg-opacity-20 duration-500 text-white border-none hover:text-white btn-sm capitalize"
                            : isPending
                            ? "btn btn-ghost duration-500 text-white btn-sm capitalize"
                            : "btn btn-ghost text-white btn-sm capitalize"
                        }
                      >
                        login
                      </NavLink>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className=" flex flex-col rounded-lg bg-black bg-opacity-80 z-20">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `btn bg-yellow-50 duration-500 ${
                          pathname === "/contact"
                            ? "text-black"
                            : "text-white bg-opacity-30"
                        } border-none hover:text-black btn-sm capitalize`
                      : isPending
                      ? `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } duration-500 text-white btn-sm capitalize`
                      : `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } text-white duration-500 btn-sm capitalize`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `btn bg-yellow-50 duration-500 ${
                          pathname === "/contact"
                            ? "text-black"
                            : "text-white bg-opacity-30"
                        } border-none hover:text-black btn-sm capitalize`
                      : isPending
                      ? `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } duration-500 text-white btn-sm capitalize`
                      : `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } text-white duration-500 btn-sm capitalize`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `btn bg-yellow-50 duration-500 ${
                          pathname === "/contact"
                            ? "text-black"
                            : "text-white bg-opacity-30"
                        } border-none hover:text-black btn-sm capitalize`
                      : isPending
                      ? `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } duration-500 text-white btn-sm capitalize`
                      : `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } text-white btn-sm capitalize`
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `btn bg-yellow-50 duration-500 ${
                          pathname === "/contact"
                            ? "text-black"
                            : "text-white bg-opacity-30"
                        } border-none hover:text-black btn-sm capitalize`
                      : isPending
                      ? `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } duration-500 text-white btn-sm capitalize`
                      : `btn btn-ghost ${
                          pathname === "/contact" ? "text-black" : "text-white"
                        } text-white btn-sm capitalize`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
