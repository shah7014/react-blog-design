import { Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import NewPost from "./pages/new-post/NewPost";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const isLoggedIn = false;
  return (
    <div>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/newpost"
          element={isLoggedIn ? <NewPost /> : <Login />}
        ></Route>
        <Route
          path="/settings"
          element={isLoggedIn ? <Settings /> : <Login />}
        ></Route>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Home />}
        ></Route>
        <Route
          path="/register"
          element={!isLoggedIn ? <Register /> : <Home />}
        ></Route>
        {/* <Route path="/post/:id" element={<SinglePost />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
