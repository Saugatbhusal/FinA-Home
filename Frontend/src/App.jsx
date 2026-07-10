import { Routes, Route } from "react-router-dom";
import Home from "./landing-page/home/Home";
import Details from "./landing-page/Details/Details";
import Signup from "./landing-page/signup/Signup";
import Login from "./landing-page/login/Login";
import Edit from "./landing-page/Editpage/Edit";
import AuthProvider from "./authenticate/AuthProvider";
import NewAirbnb from "./landing-page/New-Airnb/NewAirbnb";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Home />} />
          <Route path="/listings/detail/:id" element={<Details />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/listings/edit/:id" element={<Edit />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/listings/new" element={<NewAirbnb/>}></Route>
          <Route path="/error" element={<ErrorPage/>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
