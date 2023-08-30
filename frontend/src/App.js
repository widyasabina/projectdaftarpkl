import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Halls from "./pages/Halls";
import AddHall from "./pages/AddHall";
import EditHall from "./pages/EditHall";
import Token from "./pages/Token";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/halls" element={<Halls />} />
          <Route path="/halls/add" element={<AddHall />} />
          <Route path="/halls/edit/:id" element={<EditHall />} />
          <Route path="/token/:email/:password" element={<Token />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
