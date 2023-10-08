import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

  const {user, logOut}=useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      console.log("user logged out successfully")
    })
    .catch(error=> console.error(error))
  }

  const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/login"}>Login</NavLink></li>
    <li><NavLink to={"/register"}>Register</NavLink></li>
    <li><NavLink to={"/orders"}>Orders</NavLink></li>
    {
      user && <>
      <li><NavLink to={"/profile"}>Profile</NavLink></li>
      <li><NavLink to={"/dashboard"}>DashBoard</NavLink></li>
      </>
    }
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 15 15" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">React Auth Integration</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <>
          <span>{user.email}</span> 
          <a className="btn btn-sm" onClick={handleLogOut}>Sign Out</a>
          </> : 
          <>
          <NavLink to={"/login"}>
          <button className="btn btn-sm" onClick={handleLogOut}>Login</button>
          </NavLink>
          
          </>
        }
        
      </div>

    </div>
  );
};

export default Navbar;