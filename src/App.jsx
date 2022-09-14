import Footer from './components/Footer';
import Menu from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/User/SideBar';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
