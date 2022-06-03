import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import Widgets from "./components/Widgets";

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* header */}
          <Header />

          <div className="app-body">
            {/* body */}
            {/* sidebar */}
            <SideBar />
            {/* feed */}
            <Feed />
            {/* widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
