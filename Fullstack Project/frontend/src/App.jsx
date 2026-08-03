import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Users = lazy(() => import("./pages/Users"));
const EditUser = lazy(() => import("./pages/EditUser"));
const Navbar = lazy(() => import("./components/Navbar"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<Create />} />
          <Route path="/all-users" element={<Users />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
