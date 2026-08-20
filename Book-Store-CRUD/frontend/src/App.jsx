import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddBook from "./pages/AddBook";
import AllBooks from "./pages/AllBooks";

const App = () => {
  return (
    <BrowserRouter>
      <header style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to={"/"}>AddBook</Link>
        <Link to={"/all"}>AllBooks</Link>
      </header>

      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/all" element={<AllBooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
