import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-500 text-gray-50 flex justify-between p-5">
      <figure className="text-xl font-extrabold">Crud-App</figure>

      <nav className="flex gap-5 font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/create-user"}>Create</Link>
        <Link to={"/all-users"}>Users</Link>
      </nav>
    </header>
  );
};

export default Navbar;
