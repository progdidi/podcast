import {HashRouter as Router, Routes, Route} from "react-router-dom";


import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PodcastPage from "./pages/PodcastPage/PodcastPage";
import BlogPage from "./pages/BlogPage/BlogPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/podcast" element={<PodcastPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
      
    </Router>
    
  );
}

export default App;
