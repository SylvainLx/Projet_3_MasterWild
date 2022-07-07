import CurrentUserContext from "./assets/contexts/currentUser";

import Header from "./components/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

import "./style/App.css";

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
