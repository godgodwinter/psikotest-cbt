import { Link, MatchRoute } from "@tanstack/react-location";
import { useSelector, useDispatch } from "react-redux";

const LInk = [
  {
    id: 1,
    name: "home",
    url: "/home",
    label: "home",
    icon: "home",
    active: true,
    tipe: "default",
  },
  {
    id: 2,
    name: "About",
    url: "/home/about",
    label: "about",
    icon: "form",
    active: true,
    tipe: "lazy",
  },
];

// Set up a ReactLocation instance
const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {LInk.map((item) => (
                  <li key={item.id}>
                    {item.tipe === "default" ? (
                      <NavDefault {...item} />
                    ) : (
                      <NavLazy {...item} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">BABENG-DEV</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">
              {LInk.map((item) => (
                <li key={item.id}>
                  {item.tipe === "default" ? (
                    <NavDefault {...item} />
                  ) : (
                    <NavLazy {...item} />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/home/login"
              activeOptions={{ exact: true }}
              className="capitalize"
            >
              <span className="btn">LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const NavDefault = (props) => {
  return (
    <>
      <Link
        to={props.url}
        activeOptions={{ exact: props.active }}
        className="capitalize"
      >
        {props.label}
      </Link>
    </>
  );
};
const NavLazy = (props) => {
  return (
    <>
      <Link to={props.url} className="capitalize">
        {props.label}
        <MatchRoute to={props.url} pending>
          <Spinner />
        </MatchRoute>
      </Link>
    </>
  );
};

const Spinner = () => {
  return <>Loading. . . </>;
};

// function getActiveProps() {
//   return {
//     style: {
//       fontWeight: "bold",
//     },
//   };
// }
export default NavBar;
