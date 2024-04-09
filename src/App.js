import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import React, { useState, lazy, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Users = lazy(() => import('./components/users'))
const UserProfile = lazy(() => import('./components/userProfile'))
const SearchUser = lazy(() => import('./components/searchUser'))
const Login = lazy(() => import('./components/login'))
const AuthProfile = lazy(() => import('./components/authProfile'))
const AboutUs = lazy(() => import('./components/about'))
const NotFound = lazy(() => import('./components/notFound'))

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
          <Suspense fallback={() => <h1>Loading...</h1>}>
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
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
