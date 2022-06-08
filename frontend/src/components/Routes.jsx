import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Masterclass from "../pages/Masterclass";
import Paiement from "../pages/Paiement";
import Profil from "../pages/Profil";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import AdminAbonne from "./AdminAbonne";
import AdminMasterclass from "./AdminMasterclass";

export default function Main() {
  return (
    <div id="content-wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="abonne" element={<AdminAbonne />} />
          <Route path="editmasterclass" element={<AdminMasterclass />} />
        </Route>
      </Routes>
    </div>
  );
}
