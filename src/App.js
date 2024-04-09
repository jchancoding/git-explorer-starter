import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from './components/navbar';
import NotFound from "./components/notFound";
import UserProfile from './components/userProfile';
import SearchUser from './components/searchUser';
import AuthProfile from './components/authProfile';
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar isLogged={isLogged} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route path="/login"  element={<Login setIsLogged={setIsLogged} setUsername={setUsername}/>} />
          <Route path="/authprofile" element={isLogged ? <AuthProfile username={username}/> : <Navigate replace to={"/login"} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
