import {HashRouter as Router, Routes, Route} from "react-router-dom";


import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
      
    </Router>
    
  );
}

export default App;
