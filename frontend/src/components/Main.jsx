import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUser";

import InvalidPage from "../pages/InvalidPage";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Masterclass from "../pages/Masterclass";
import Profil from "../pages/Profil";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Connexion from "../pages/Connexion";
import Inscription from "../pages/Inscription";
import AdminAbonne from "./AdminAbonne";
import AdminMasterclass from "./AdminMasterclass";
import Wrapper from "../services/wrapper";

export default function Main() {
  const { userProfil } = useContext(CurrentUserContext);

  const isAdmin = userProfil !== null && userProfil?.role === "admin";
  const isOnline = userProfil !== null;

  return (
    <div id="content-wrap">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/403" element={<InvalidPage />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/search" element={<Search isOnline={isOnline} />} />
          <Route
            path="/masterclass"
            element={<Masterclass isOnline={isOnline} />}
          />
          <Route
            path="/masterclass/:masterclassId"
            element={<Masterclass isOnline={isOnline} />}
          />
          <Route path="/profil" element={<Profil isOnline={isOnline} />} />
          <Route path="/contact" element={<Contact isOnline={isOnline} />} />
          <Route path="/admin" element={<Admin isAdmin={isAdmin} />}>
            <Route path="abonne" element={<AdminAbonne />} />
            <Route path="editmasterclass" element={<AdminMasterclass />} />
          </Route>

          {/* <Route path="/403" element={<InvalidPage />} />
          <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} /> */}
        </Routes>
      </Wrapper>
    </div>
  );
}
