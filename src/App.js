import "./App.css";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import NewPost from "./pages/new-post/NewPost";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <NewPost /> */}
      <Settings />
    </div>
  );
}

export default App;
