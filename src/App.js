import "./App.css";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import NewPost from "./pages/new-post/NewPost";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <NewPost /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
