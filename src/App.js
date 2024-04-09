import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import NotFound from "./components/notFound";
import UserProfile from './components/userProfile';
import SearchUser from './components/searchUser';
import AuthProfile from './components/authProfile';
import Login from "./components/login";
import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          className="fade"
          timeout={300}
          unmountOnExit
        >
          <Routes Location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/user/:username" element={<UserProfile />} />
            <Route path="/search" element={<SearchUser />} />
            <Route
              path="/login"
              element={
                <Login setIsLogged={setIsLogged} setUsername={setUsername} />
              }
            />
            <Route
              path="/authprofile"
              element={
                isLogged ? (
                  <AuthProfile username={username} />
                ) : (
                  <Navigate replace to={"/login"} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
