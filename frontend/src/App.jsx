import { CurrentUserContextProvider } from "./contexts/currentUser";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./style/App.css";

function App() {
  return (
    <div className="App">
      <CurrentUserContextProvider>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContextProvider>
    </div>
  );
}

export default App;
