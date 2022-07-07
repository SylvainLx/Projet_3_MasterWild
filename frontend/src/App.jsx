import { CurrentUserContextProvider } from "./contexts/currentUser";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./style/App.css";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
