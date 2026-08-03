import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-fuchsia-700 text-gray-50 flex justify-between p-5">
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
