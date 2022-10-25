import "./App.css";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import NotFound from "./pages/NotFound";
import HomePage from "./components/posts/HomePage";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import MainProfile from "./pages/MainProfile";
import SinglePost from "./components/posts/SinglePost";
import SearchList from "./components/SearchList";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <Header />
                <HomePage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <Header />
              <CreatePost />
            </>
          }
        />

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/mypage"
          element={
            <>
              <Header />
              <MainProfile />
            </>
          }
        />
        <Route path="/mypage/:id" element={<SinglePost />} />
        <Route path="/searchresults" element={<SearchResults />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* // logout */}
    </div>
  );
}

export default App;
