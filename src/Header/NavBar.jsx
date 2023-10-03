import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        swal("successful!", "You have logged out", "success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container mx-auto">
      <nav className="flex justify-center md:justify-between p-5 items-center">
        <div className="hidden md:block">
          <img src="../Logo/Logo.png"></img>
        </div>
        <div>
          <ul className="flex gap-10 text-md font-bold items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-600 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            {user && (
              <div className="flex gap-8">
                <li>
                  <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    Donation
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-red-600 underline"
                        : ""
                    }
                  >
                    Statistics
                  </NavLink>
                </li>
              </div>
            )}

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-600 underline"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-600 underline"
                    : ""
                }
              >
                Register
              </NavLink>
            </li>
            {user ? (
              <div className="flex items-center gap-5">
                <li>
                  <button onClick={handleSignOut} className="btn btn-secondary">
                    Sign Out
                  </button>
                </li>
                <div>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt="img"
                  ></img>
                </div>
              </div>
            ) : (
              <li>
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
